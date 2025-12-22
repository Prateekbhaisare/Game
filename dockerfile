FROM nginx:alpine

WORKDIR /AnActionGame

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html/

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]


