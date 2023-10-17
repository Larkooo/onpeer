import { livepeer, prisma, sdk } from "src/lib/providers";
import { Contract } from "constants/contracts";
import { ContractEvent } from "@thirdweb-dev/sdk";
import pino from "pino";

const logger = pino();

let syncBlockNumber = await prisma.sync.upsert({
  where: { chainId: Contract.chain.chainId },
  update: {},
  create: {
    chainId: 1,
    latestBlockNumber: Contract.blockNumber,
  },
});

const dumpAssetData = async (uid: string) => {
  const asset = await livepeer.getAsset(uid);
  return {
    createdAt: new Date(asset.createdAt!),
    playbackId: asset.playbackId!,
  };
};

const handleEvent = async (event: ContractEvent<Record<string, any>>) => {
  const log = logger.child({
    event: event.eventName,
    tx: event.transaction.transactionHash,
    blockNumber: event.transaction.blockNumber,
  });

  const name = event.eventName;
  const data = event.data;

  switch (name) {
    case "VideoAssetCreated":
      return prisma.video.upsert({
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
      });
    case "VideoAssetMetadataUpdated":
      return prisma.video.update({
        where: { id: data.uid },
        data: {
          title: data.title,
          description: data.description,
        },
      });
    case "VideoAssetLiked":
      return prisma.like.upsert({
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
      });
    case "VideoAssetUnliked":
      return prisma.like.deleteMany({
        where: {
          userId: data.liker,
          videoId: data.uid,
        },
      });
    case "VideoAssetCommented":
      return prisma.comment.create({
        data: {
          videoId: data.uid,
          userId: data.author,
          text: data.comment,
          tx: event.transaction.transactionHash,
        },
      });
  }
};

const latestBlockNumber = await sdk.getProvider().getBlockNumber();
const contract = await sdk.getContract(
  process.env.NEXT_PUBLIC_ONPEER_CONTRACT_ADDRESS!
);

const processBlock = async (blockNumber: number) => {
  if (blockNumber === syncBlockNumber.latestBlockNumber) {
    return;
  }

  logger.info(
    `Syncing events from block ${syncBlockNumber.latestBlockNumber} to ${blockNumber}`
  );

  const events = await contract.events.getAllEvents({
    fromBlock: syncBlockNumber.latestBlockNumber,
    toBlock: blockNumber,
  });

  const tx: any[] = [];
  for (const event of events) {
    tx.push(handleEvent(event));
  }

  try {
    await prisma.$transaction(tx);

    syncBlockNumber = await prisma.sync.update({
      where: { chainId: Contract.chain.chainId },
      data: {
        latestBlockNumber: blockNumber,
      },
    });

    logger.info(`Synced events to block ${blockNumber}`);
  } catch (e) {
    logger.error("Error syncing events", e);
  }
};

let blockToProcess = Promise.resolve();
sdk.getProvider().on("block", async (blockNumber) => {
  blockToProcess = blockToProcess.then(async () =>
    Promise.resolve(await processBlock(blockNumber))
  );
});
