FROM node:alpine3.20 AS react_builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM alpine:3.20 AS deploy

COPY --from=react_builder /app/dist/ /app/dist/

CMD ["/bin/sh", "-c", "/bin/cp -r /app/dist/* /var/www/jbok.info/"]