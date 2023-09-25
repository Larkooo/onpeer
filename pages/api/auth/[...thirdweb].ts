import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../upload";

export const onpeerWallet = new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY!);

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
  wallet: onpeerWallet,
  // NOTE: All these callbacks are optional! You can delete this section and
  // the Auth flow will still work.
  callbacks: {
    onLogin: async (address) => {
      await prisma.user.upsert({
        where: { id: address },
        update: {},
        create: {
          id: address,
        },
      });
    },
    onUser: async (user) => {
      
    },
    onLogout: async (user) => {
      
    },
  },
});

export default ThirdwebAuthHandler();
