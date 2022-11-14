FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate

# FROM node:18-alpine
# WORKDIR /app
# COPY --from=build /app/out .
# RUN npm install -g http-server
# EXPOSE 8080
# CMD ["http-server", "."]

FROM nginx:1.21.5-alpine
COPY --from=build /app/out /usr/share/nginx/html
COPY dev.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
