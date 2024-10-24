use std::time::Duration;

use http::Method;
use tokio::signal;
use tower::{limit::ConcurrencyLimitLayer, ServiceBuilder};
use tower_http::{cors::CorsLayer, timeout::TimeoutLayer, trace::TraceLayer};
mod api;
mod router;

const DEV_ORIGINS: [&str; 2] = ["localhost:3000", "localhost:5173"];
const DEV_ADDR: &str = "localhost:3000";
const PROD_ORIGIN: &str = "*";
const PROD_ADDR: &str = "0.0.0.0:3000";

#[tokio::main]
async fn main() {
    let profile = std::env::var("AXUM_PROFILE").unwrap_or_else(|_| "dev".to_string());

    // setup tcp listener
    let (origins, listener) = if profile == "dev" {
        (
            DEV_ORIGINS
                .iter()
                .map(|s| s.parse().expect(
                    "failed to parse origin, make sure it's a valid URL (e.g. http://localhost:3000)",
                ))
                .collect::<Vec<_>>(),
            tokio::net::TcpListener::bind(DEV_ADDR).await.expect(
                "failed to bind to address, make sure it's a valid address (e.g. localhost:3000)",
            ),
        )
    } else {
        (
            vec![PROD_ORIGIN.parse().expect(
                "failed to parse origin, make sure it's a valid URL (e.g. http://localhost:3000)",
            )],
            tokio::net::TcpListener::bind(PROD_ADDR).await.expect(
                "failed to bind to address, make sure it's a valid address (e.g. localhost:3000)",
            ),
        )
    };

    let cors = CorsLayer::new()
        .allow_origin(origins)
        .allow_methods([Method::GET, Method::POST]);

    let app = router::init().layer(
        ServiceBuilder::new()
            .layer(ConcurrencyLimitLayer::new(100))
            .layer(TraceLayer::new_for_http())
            .layer(cors)
            .layer(TimeoutLayer::new(Duration::from_secs(10))),
    );

    // start server
    println!(
        "listening on {}",
        listener
            .local_addr()
            .expect("failed to get local address, make sure the listener is bound to an address",)
    );

    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .await
        .expect(
            "failed to start server, make sure the listener is bound to a valid address and port",
        );
}

async fn shutdown_signal() {
    let ctrl_c = async {
        signal::ctrl_c()
            .await
            .expect("failed to install Ctrl+C handler");
    };

    #[cfg(unix)]
    let terminate = async {
        signal::unix::signal(signal::unix::SignalKind::terminate())
            .expect("failed to install signal handler")
            .recv()
            .await;
    };

    #[cfg(not(unix))]
    let terminate = std::future::pending::<()>();

    tokio::select! {
        _ = ctrl_c => {},
        _ = terminate => {},
    }
}
