FROM nginx:1.13.8
LABEL maintainer "de.lee <de.lee@lawcompany.co.kr>"

RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y --no-install-recommends apt-utils vim

COPY ./build /usr/share/nginx/html
COPY nginx-admin.conf /etc/nginx/conf.d/default.conf