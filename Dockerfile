FROM node:carbon

RUN mkdir -p /BigBoss

WORKDIR /BigBoss

COPY package.json /BigBoss

RUN npm i

COPY . /BigBoss

EXPOSE 7001

CMD [ "npm", "run", "deploy" ]