import "reflect-metadata";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { prisma } from "src/lib/providers";
import { apolloServer } from "src/lib/apollo";

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma: prisma }),
});

export default handler;
