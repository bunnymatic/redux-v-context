FROM node:16.13.0-alpine
WORKDIR /redux-v-context
COPY package.json yarn.lock ./
RUN npx yarn@1.22.17 install --production
COPY . .
RUN DISABLE_ESLINT_PLUGIN=true npm run build
EXPOSE 3000
ENV NODE_ENV=production
CMD npx --no-install serve -s
