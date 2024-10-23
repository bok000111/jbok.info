pub mod handler;

use axum::{routing::get, Router};

pub fn init() -> Router {
    Router::new().route("/hello", get(handler::hello_world))
}
