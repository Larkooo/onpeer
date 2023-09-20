import { ThirdwebSDK, getContract } from "@thirdweb-dev/sdk";
import { getUser } from "./auth/[...thirdweb]";
import { NextApiRequest, NextApiResponse } from "next";
import formidable, { File as FormidableFile } from "formidable";
import { studioProvider, createClient } from "@livepeer/react";
import { NextRequest } from "next/server";
import { createReadStream, readFile, readFileSync } from "fs";
import { File } from "buffer";

const { provider: livepeer } = createClient({
  provider: studioProvider({
    apiKey: process.env.LIVEPEER_API_KEY!,
  }),
});
const sdk = new ThirdwebSDK("mumbai", {
  clientId: process.env.THIRDWEB_CLIENT_ID!,
  secretKey: process.env.THIRDWEB_SECRET_KEY!,
});

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


  const result = await livepeer.createAsset({
    sources: [
      {
        name: file.originalFilename!,
        file: createReadStream(file.filepath)
      },
    ],
  });

  const onpeer = await sdk.getContract(process.env.ONPEER_CONTRACT_ADDRESS!);
  const signature = await onpeer.erc721.signature.generate({
    to: user.address,
    metadata: result[0].id,
    quantity: 1,
    price: 0.1,
  });

  return res.status(200).json(signature);
};

export default handler;
