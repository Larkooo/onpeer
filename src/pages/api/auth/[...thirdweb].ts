import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { prisma } from "../graphql";

export const onpeerWallet = new PrivateKeyWallet(
  process.env.THIRDWEB_AUTH_PRIVATE_KEY!
);

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
      const userVideoCount = await prisma.video.count({
        where: { authorId: user.address },
      });
      const mintSignatures: any = await prisma.video.findMany({
        where: {
          authorId: user.address,
          NOT: {
            mintTx: {
              not: null,
            },
          },
        },
        select: {
          id: true,
          mintSignature: true,
        },
      });

      return {
        videoCount: userVideoCount,
        mintSignatures: mintSignatures.reduce(
          (obj: any, item: any) => ({
            ...obj,
            [item.id]: JSON.parse(item.mintSignature),
          }),
          {}
        ),
      };
    },
    onLogout: async (user) => {},
  },
});

export default ThirdwebAuthHandler();
