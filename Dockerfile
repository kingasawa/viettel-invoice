# specify the node base image with your desired version node:<version>
FROM gcr.io/dots-244203/node-helm:latest
MAINTAINER phongdang@goappable.com
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
