FROM node:14-alpine
WORKDIR /characters_app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]