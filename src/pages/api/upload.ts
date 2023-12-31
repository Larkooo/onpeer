import { ThirdwebSDK, getContract } from "@thirdweb-dev/sdk";
import { getUser, onpeerWallet } from "./auth/[...thirdweb]";
import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File as FormidableFile } from "formidable";
import { studioProvider, createClient } from "@livepeer/react";
import { NextRequest } from "next/server";
import { ReadStream, createReadStream, readFile, readFileSync } from "fs";
import { File } from "buffer";
import { kv } from "@vercel/kv";
import { Contract } from "constants/contracts";
import { livepeer, prisma, sdk } from "src/lib/providers";
import ffprobe from "ffprobe";
import ffprobePath from "@ffprobe-installer/ffprobe";

//set bodyparser
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed.",
    });
  }

  // Must be logged in
  const user = await getUser(req);
  if (!user) {
    return res.status(401).json({
      message: "Not authorized.",
    });
  }

  // Retrieve file upload from form data using formidable
  const data = await new Promise((resolve, reject) => {
    const form = formidable();

    form.parse(req, (err, fields, files) => {
      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });

  const file = (data as any).files?.file?.[0] as FormidableFile;
  if (!file) {
    return res.status(400).json({
      message: "No file uploaded.",
    });
  }

  // we calculate mint price depending on video duration
  // and service fee
  const videoMeta = await ffprobe(file.filepath, {
    path: ffprobePath.path,
  });

  let mintPrice =
  Number.parseFloat(videoMeta.streams[0].duration!) * Number.parseFloat(process.env.MINT_VIDEO_PER_SECOND_PRICE!);
  mintPrice += Number.parseFloat(process.env.MINT_VIDEO_SERVICE_FEE_PRICE!);

  const result = await livepeer.createAsset({
    sources: [
      {
        name: file.originalFilename!,
        file: createReadStream(file.filepath),
        creatorId: user.address,
      },
    ],
  });

  const onpeer = await sdk.getContract(Contract.address!);
  const signature = await onpeer.erc721.signature.generate({
    to: user.address,
    metadata: result[0].id,
    quantity: 1,
    price: mintPrice,
  });

  const video = await prisma.video.create({
    data: {
      id: result[0].id,
      title: file.originalFilename!,
      description: "",
      authorId: user.address,
      createdAt: new Date(result[0].createdAt ?? Date.now()),
      mintSignature: JSON.stringify(signature),
      playbackId: result[0].playbackId!,
    },
  });

  return res.status(200).json(video);
};

export default handler;
