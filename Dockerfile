FROM node:latest

WORKDIR /
COPY package*.json ./
RUN npm ci
COPY . .
COPY entrypoint.sh .
RUN chmod +x ./entrypoint.sh

EXPOSE 6000
CMD ["./entrypoint.sh"]


