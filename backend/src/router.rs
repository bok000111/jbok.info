pub fn init() -> axum::Router {
    axum::Router::new().nest("/api", crate::api::init())
}
