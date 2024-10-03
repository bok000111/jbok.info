FROM rust:alpine3.20 AS wasm_builder

WORKDIR /wasm

RUN apk add --no-cache wasm-pack binaryen

COPY wasm/src ./src
COPY wasm/Cargo.toml ./

RUN wasm-pack build --no-pack

FROM node:alpine3.20 AS react_builder

WORKDIR /react

COPY react/package.json react/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --from=wasm_builder /wasm/pkg /wasm/pkg
COPY react/src ./src
COPY react/public ./public
COPY react/tsconfig.json \
	react/tsconfig.app.json \
	react/tsconfig.node.json \
	react/tailwind.config.js \
	react/postcss.config.js \
	react/vite.config.ts \
	react/index.html \
	./

RUN yarn build

FROM alpine:3.20 AS deploy

COPY --from=react_builder /react/dist/ /react/dist/

RUN du -sh /react/dist

CMD ["/bin/sh", "-c", "/bin/cp -r /react/dist/* /var/www/jbok.info/"]