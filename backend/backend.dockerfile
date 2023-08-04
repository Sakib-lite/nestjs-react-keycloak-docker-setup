FROM node:current-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000
ENV MYSQL_ROOT_PASSWORD=myrootpw
ENV MYSQL_DATABASE=auth_app
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=secret
ENV MYSQL_HOST=localhost

RUN npm run build
EXPOSE $PORT

CMD ["node", "dist/main"]
