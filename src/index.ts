import "reflect-metadata";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { resolvers } from "./resolvers";

async function bootstrap() {
  // Build Schema
  const schema = await buildSchema({ resolvers, emitSchemaFile: true, });

  // Init Express
  const app = express();

  // Create Apollo Server
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start();

  // apply middleware to server
  server.applyMiddleware({ app });

  // app.listen on express server
  app.listen({ port: 4000 }, () => {
    console.log("App is listening on http://localhost:4000");
  });

  // Connect to DB
}

bootstrap();
