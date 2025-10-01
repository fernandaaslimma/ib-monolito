FROM node:14.15.5-alpine as builder

WORKDIR /app

COPY ./.npmrc ./.npmrc
COPY ./package.json ./package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.28-alpine

RUN mkdir -p /usr/share/nginx/html/monolito 

COPY --from=builder /app/dist /usr/share/nginx/html/monolito
COPY bocombbm-mf-ib-version.js /usr/share/nginx/html/monolito
COPY start.sh /usr/share/nginx/html/monolito
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

RUN ["chmod", "+x", "/usr/share/nginx/html/monolito/start.sh"]

CMD ["sh", "/usr/share/nginx/html/monolito/start.sh"]