FROM node:14.17.5

# RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3008

CMD ["npm", "run", "dev"]