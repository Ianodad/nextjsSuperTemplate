# base image
FROM node:alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install  --frozen-lockfile

# END DEPS IMAGE

FROM node:lts AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Remove all the development dependencies since we don't
# need them to run the actual server.
RUN rm -rf node_modules
RUN yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline

# END OF BUILD_IMAGE

FROM node:alpine as runner
ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

WORKDIR /app

COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

#  OPTIONALLY the next.config.js, if your app has one
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js  ./
USER nextjs
EXPOSE 3000
CMD ["npm", "run", "start"]