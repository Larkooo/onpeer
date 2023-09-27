import { createClient, studioProvider } from "@livepeer/react";
import { PrismaClient } from "@prisma/client";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
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