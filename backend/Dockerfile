FROM rust:alpine3.20 AS backend_builder

WORKDIR /axum

RUN apk add --no-cache musl-dev libressl-dev

COPY ./Cargo.toml ./
COPY ./src ./src

RUN cargo build --release

FROM alpine:3.20 AS deploy

WORKDIR /axum

COPY --from=backend_builder /axum/target/release/jbok_info-axum ./jbok_info-axum

EXPOSE 3000

ENTRYPOINT [ "./jbok_info-axum" ]