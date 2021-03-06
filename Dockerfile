FROM node:12.18.3-alpine

WORKDIR /app

RUN apk update && \
  npm install -g npm && \
  npm install -g @vue/cli && \
  npm install -g firebase-tools
CMD ["/bin/ash"]
