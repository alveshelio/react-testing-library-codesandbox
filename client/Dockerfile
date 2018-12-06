# Dockerfile to build Front-End image
FROM nginx:1.13.8
COPY dist /usr/share/nginx/html
COPY config /usr/share/nginx/html/config
COPY start-frontend.sh /root/start-frontend.sh
RUN chmod u+x /root/start-frontend.sh

ENV LANG C.UTF-8

CMD ["/root/start-frontend.sh"]
