FROM node:14.13.1

WORKDIR /app

RUN yarn install --silent
RUN yarn global add react-scripts

CMD ["yarn", "start"]
