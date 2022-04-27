FROM node:16-alpine

COPY packages/config /packages/config
COPY packages/constant /packages/constant
COPY packages/server-common /packages/server-common
COPY packages/tsconfig /packages/tsconfig

COPY services/auth /services/auth

WORKDIR /services/auth

RUN npm install --only=prod

CMD ["npm", "run", "dev"]
