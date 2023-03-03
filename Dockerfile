FROM node:18

WORKDIR /code

COPY entrypoint /code/entrypoint

RUN chown -R node:node /code

USER node

RUN mkdir -p /code/node_modules

EXPOSE 3000

ENV PORT 3000

ENTRYPOINT ["./entrypoint"]
