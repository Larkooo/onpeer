import { ThirdwebSDK, getContract } from "@thirdweb-dev/sdk";
import { getUser } from "./auth/[...thirdweb]";
import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { studioProvider, createClient } from "@livepeer/react"

const {provider: livepeer} = createClient({
  provider: studioProvider({
    apiKey: process.env.LIVEPEER_API_KEY!,
  }),
})
const sdk = new ThirdwebSDK(process.env.CHAIN!);

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
  const form = new formidable.IncomingForm();
  const data = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
  

  const file = (data as any).files.file;
  if (!file) {
    return res.status(400).json({
      message: "No file uploaded.",
    });
  }

  const result = await livepeer.createAsset({
    sources: [{
      name: file.name,
      file: file as any,
    }],
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
