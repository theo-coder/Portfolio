FROM node:15.5.0

WORKDIR /app

COPY . ./

RUN yarn install
RUN echo "deb http://ftp.us.debian.org/debian testing main contrib non-free" >> /etc/apt/sources.list
RUN apt update
RUN apt install build-essential -y

CMD ["yarn", "start"]
