import "reflect-metadata";

import { NextApiRequest, NextApiResponse } from "next";
import { resolvers as generatedResolvers } from "prisma/generated/type-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { buildTypeDefsAndResolversSync } from "type-graphql";
import { graphql } from "graphql";
import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { PrismaClient } from "@prisma/client/edge";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { createClient, studioProvider } from "@livepeer/react";
import { Contract } from "constants/contracts";
import { prisma } from "src/lib/providers";

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

const plugins: ApolloServerPlugin[] = [];
if (process.env.NODE_ENV === "development") {
  plugins.push(ApolloServerPluginLandingPageGraphQLPlayground() as any);
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma: prisma }),
});

export default handler;
