import "reflect-metadata";

import { NextApiRequest, NextApiResponse } from "next";
import { resolvers as generatedResolvers } from "prisma/generated/type-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { buildTypeDefsAndResolversSync } from "type-graphql";
import { graphql } from "graphql";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { PrismaClient } from "@prisma/client";

const { typeDefs, resolvers } = buildTypeDefsAndResolversSync({
  resolvers: generatedResolvers,
  globalMiddlewares: [
    ({ context, info }, next) => {
      if (info.operation.operation === "mutation") {
        throw new Error("Not authorized.");
      }

      return next();
    },
  ],
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground() as any],
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma: new PrismaClient() }),
});

export default handler;
