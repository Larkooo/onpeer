import { NextApiRequest, NextApiResponse } from "next";
import { Contract } from "constants/contracts";
import { prisma, sdk, livepeer } from "src/lib/providers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const syncBlockNumber = await prisma.sync.upsert({
    where: { chainId: Contract.chain.chainId },
    update: {},
    create: {
      chainId: 1,
      latestBlockNumber: Contract.blockNumber,
    },
  });
  const contract = await sdk.getContract(
    process.env.NEXT_PUBLIC_ONPEER_CONTRACT_ADDRESS!
  );

  const latestBlockNumber = await sdk.getProvider().getBlockNumber();
  const events = await contract.events.getAllEvents({
    fromBlock: syncBlockNumber.latestBlockNumber,
    toBlock: latestBlockNumber,
  });

  const dumpAssetData = async (uid: string) => {
    const asset = await livepeer.getAsset(uid);
    return {
      createdAt: new Date(asset.createdAt!),
      playbackId: asset.playbackId!,
    };
  };

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
              mintTx: event.transaction.transactionHash,
              tokenId: data.tokenId.toHexString(),
              ...(await dumpAssetData(data.uid)),
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
  const sync = await prisma.sync.update({
    where: { chainId: Contract.chain.chainId },
    data: {
      latestBlockNumber,
    },
  });

  return res.status(200).json(sync);
};

export default handler;
