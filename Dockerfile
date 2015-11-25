FROM node:5.1

RUN apt-get update -qq && apt-get install -y build-essential
RUN npm install apidoc -g

RUN mkdir /app
WORKDIR /app
ADD . /app

RUN npm install

CMD ["npm", "start"]
