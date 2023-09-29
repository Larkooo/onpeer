import { NextApiRequest, NextApiResponse } from "next";
import shortUUID from "short-uuid";
import { formatAddress } from "src/lib/format";
import { livepeer, prisma, sdk } from "src/lib/providers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const uuid = shortUUID();
  const id = req.query.id as string;

  const video = await prisma.video.findUnique({
    where: {
      id,
    },
  });

  const likesCount = await prisma.like.count({
    where: {
      videoId: id,
    },
  });

  if (!video) {
    return res.status(404).json({
      error: "Video not found",
    });
  }

  const metrics = await livepeer.getAssetMetrics({
    assetId: video.id,
  });

  return res.status(200).json({
    // oembed
    version: "1.0",
    type: "link",
    author_name: `${video.description}\n\n👁️ ${metrics.metrics[0].startViews} - 🧡 ${likesCount}\n${formatAddress(video.authorId)}`,
    author_url: `https://onpeer.vercel.app/${uuid.fromUUID(id)}`,
    provider_name: "onpeer",
    provider_url: "https://onpeer.vercel.app",
    title: video.title,
  });
};

export default handler;
