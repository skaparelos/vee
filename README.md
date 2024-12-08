# Vee

## Installation

1. Install dependencies: `npm install`
2. Generate TypeScript type definitions for the GraphQL schema: `npm run generate:typings`
3. Create sqlite database and create tables: `npx prisma db push`
4. Seed db and run migration `npx prisma migrate dev --name init`
5. Start server: `npm run start:dev`
6. Run e2e tests: `npm run test:e2e`

## Docker

```
$ docker build -t my-nestjs-app .
$ docker run -p 3000:3000 my-nestjs-app
```

## Apollo Sandbox

When the application is running, you can go to [http://localhost:3000/graphql](http://localhost:3000/graphql) to access the Apollo Sandbox
