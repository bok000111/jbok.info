FROM node:alpine3.20 AS react_builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY src/ src/
COPY public/ public/
COPY index.html \
	vite.config.ts \
	tsconfig.json \
	tsconfig.app.json \
	tsconfig.node.json \
	postcss.config.js \
	tailwind.config.js \
	./

RUN npm run build

FROM alpine:3.20 AS deploy

COPY --from=react_builder /app/dist/ /app/dist/

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["/bin/mv /app/dist/* /var/www/jbok.info/"]