FROM node:16-alpine

COPY packages/config /packages/config
COPY packages/constant /packages/constant
COPY packages/service-common /packages/service-common
COPY packages/tsconfig /packages/tsconfig
COPY packages/types /packages/types

COPY services/mealplan /services/mealplan

WORKDIR /services/mealplan

RUN npm install --only=prod

CMD ["npm", "run", "dev:service"]
