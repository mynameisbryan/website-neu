FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install sharp
COPY . .

ARG NEXT_PUBLIC_STRAPI_API_URL
ARG STRAPI_API_TOKEN
ENV NEXT_PUBLIC_STRAPI_API_URL=${NEXT_PUBLIC_STRAPI_API_URL}
ENV STRAPI_API_TOKEN=${STRAPI_API_TOKEN}

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
