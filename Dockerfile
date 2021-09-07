FROM node

RUN npm install -g http-server

RUN mkdir -p /usr/src/wwwroot/react17

WORKDIR /usr/src/wwwroot/react17

COPY package.json /usr/src/wwwroot/react17/package.json
COPY package-lock.json /usr/src/wwwroot/react17/package-lock.json

RUN cd /usr/src/wwwroot/react17

RUN npm ci

COPY . /usr/src/wwwroot/react17

RUN npm run build

EXPOSE 80

CMD http-server ./public -p 80

