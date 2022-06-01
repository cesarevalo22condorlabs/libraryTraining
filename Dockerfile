
FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 


COPY . .

RUN npm run build


EXPOSE 3000

ENV MONGO_HOST=ac-uvprpao-shard-00-00.7azlnw4.mongodb.net,ac-uvprpao-shard-00-01.7azlnw4.mongodb.net,ac-uvprpao-shard-00-02.7azlnw4.mongodb.net
ENV MONGO_PORT=27017
ENV MONGO_DB=libraryTraining
ENV MONGO_USER=cesar
ENV MONGO_PASSWORD=Santi522$
ENV MONGO_SSL=false


CMD ["npm", "start"]