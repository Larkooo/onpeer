import { ThirdwebSDK, getContract } from "@thirdweb-dev/sdk";
import { getUser } from "./auth/[...thirdweb]";
import { NextApiRequest, NextApiResponse } from "next";

const sdk = new ThirdwebSDK(process.env.CHAIN!, );

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed.",
    });
  }

  // Retrieve file upload
  const file = req.body.file;

  const user = await getUser(req);

  if (!user) {
    return res.status(401).json({
      message: "Not authorized.",
    });
  }

  const onpeer = await sdk.getContract(process.env.ONPEER_CONTRACT_ADDRESS!);
  onpeer.erc721.signature.generate({
    to: user.address,
    metadata: "",
    quantity: 1,
    price: 0.1,
  });

  return res.status(200).json({
    message: `This is a secret for ${user.address}.`,
  });
};

export default handler;
