import { NextApiRequest, NextApiResponse } from "next";
import { prisma, sdk } from "../upload";
import { Contract } from "constants/contracts";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const syncBlockNumber = await prisma.sync.upsert({
    where: { chainId: Contract.chain.chainId },
    update: {},
    create: {
      chainId: 1,
      latestBlockNumber: Contract.blockNumber,
    },
  });
  const contract = await sdk.getContract(process.env.NEXT_PUBLIC_ONPEER_CONTRACT_ADDRESS!);

  const latestBlockNumber = await sdk.getProvider().getBlockNumber();
  const events = await contract.events.getAllEvents({
    fromBlock: syncBlockNumber.latestBlockNumber,
    toBlock: latestBlockNumber,
  });

  let tx: any[] = [];
  for (const event of events) {
    const name = event.eventName;
    const data = event.data;

    switch (name) {
      case "VideoAssetCreated":
        tx.push(
          prisma.video.upsert({
            where: { id: data.uid },
            update: {
              title: data.title,
              description: data.description,
              authorId: data.author,
              mintTx: event.transaction.transactionHash,
              tokenId: data.tokenId.toHexString(),
            },
            create: {
              id: data.uid,
              title: data.title,
              description: data.description,
              authorId: data.author,
              createdAt: new Date((await sdk.getProvider().getBlock(data.blockNumber)).timestamp),
              mintTx: event.transaction.transactionHash,
              tokenId: data.tokenId.toHexString(),
            },
          })
        );
        break;
      case "VideoAssetMetadataUpdated":
        tx.push(
          prisma.video.update({
            where: { id: data.uid },
            data: {
              title: data.title,
              description: data.description,
            },
          })
        );
        break;
      case "VideoAssetLiked":
        tx.push(
          prisma.like.upsert({
            where: {
              userId_videoId: {
                videoId: data.uid,
                userId: data.liker,
              },
            },
            update: {},
            create: {
              videoId: data.uid,
              userId: data.liker,
              tx: event.transaction.transactionHash,
            },
          })
        );
        break;
      case "VideoAssetUnliked":
        tx.push(
          prisma.like.delete({
            where: {
              userId_videoId: {
                videoId: data.uid,
                userId: data.liker,
              },
            },
          })
        );
        break;
      case "VideoAssetCommented":
        tx.push(
          prisma.comment.create({
            data: {
              videoId: data.uid,
              userId: data.author,
              text: data.comment,
              tx: event.transaction.transactionHash,
            },
          })
        );
        break;
    }
  }

    await prisma.$transaction(tx);
    await prisma.sync.update({
      where: { chainId: Contract.chain.chainId },
      data: {
        latestBlockNumber,
      },
    });
};

export default handler;