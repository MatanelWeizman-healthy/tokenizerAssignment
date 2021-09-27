FROM node:14
WORKDIR /usr/wordTokenizer
COPY package*.json ./
RUN npm install
EXPOSE 3000
COPY . .
CMD [ "npm", "start" ]