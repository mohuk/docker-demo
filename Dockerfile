FROM mohuk/node-python:7.7-2.7.12-alpine

WORKDIR /usr/app/src

COPY . /usr/app/src
RUN yarn

EXPOSE 3000
CMD ["DEBUG=docker-demo:*"]
ENTRYPOINT ["npm", "run", "start"]
