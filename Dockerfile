FROM node:10-alpine
RUN npm install -g http-server
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
CMD ["npm", "run","start"]