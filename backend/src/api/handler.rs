use axum::response::Html;

pub async fn hello_world() -> Html<&'static str> {
    Html("<h1>Hello, World!</h1>")
}
