import "reflect-metadata";

import { NextApiRequest, NextApiResponse } from "next";
import { resolvers as generatedResolvers } from "prisma/generated/type-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { buildTypeDefsAndResolversSync } from "type-graphql";
import { graphql } from "graphql";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { PrismaClient } from '@prisma/client/edge'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { createClient, studioProvider } from "@livepeer/react";
import { Contract } from "constants/contracts";


export const prisma = new PrismaClient();

export const { provider: livepeer } = createClient({
  provider: studioProvider({
    apiKey: process.env.LIVEPEER_API_KEY!,
  }),
});
export const sdk = ThirdwebSDK.fromPrivateKey(
  process.env.THIRDWEB_AUTH_PRIVATE_KEY!,
  Contract.chain,
  {
    clientId: process.env.THIRDWEB_CLIENT_ID!,
    secretKey: process.env.THIRDWEB_SECRET_KEY!,
  }
);

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
  plugins: [process.env.NODE_ENV === "development" && ApolloServerPluginLandingPageGraphQLPlayground() as any],
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma: prisma }),
});

export default handler;
