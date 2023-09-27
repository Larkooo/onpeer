import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
  useSDK,
  useWallet,
  SignedPayload721WithQuantitySignature,
  useContract,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { UploadFile } from "../components/UploadFile";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Pencil1Icon, Pencil2Icon, UploadIcon } from "@radix-ui/react-icons";
import Connect from "../components/Connect";
import { GENERATED_ABI } from "@thirdweb-dev/generated-abis/dist/declarations/src/index";
import { BigNumber } from "ethers";
import { Contract } from "constants/contracts";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const address = useAddress();
  const wallet = useWallet();
  const { user, isLoggedIn } = useUser();
  const [secret, setSecret] = useState();
  const { contract } = useContract(Contract.address!);
  const { toast } = useToast();
  const { push } = useRouter();

  const onUpload = async (files: File[]) => {
    const data = new FormData();
    data.append("file", files[0]);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    const signature: SignedPayload721WithQuantitySignature = await res.json();

    push("/dashboard");
    toast({
      title: "Video: Uploaded",
      description: "Mint your video to make it persistent.",
      action: (
        <ToastAction
          className="bg-orange-600 text-white hover:bg-orange-500 px-5 gap-2"
          altText="Mint"
          onClick={async () => {
            await contract!.erc721.signature.mint(signature);
          }}
        >
          Mint <Pencil1Icon />
        </ToastAction>
      ),
      duration: 1000**1000*1000
    });
  };

  return (
    <div className="flex justify-center items-center h-full p-4 text-center flex-col gap-4">
      <h1 className="lg:text-7xl text-5xl font-bold md:px-32">
        Share your <span className="text-orange-600">video</span> with the{" "}
        <span className="text-green-500">world</span>, and{" "}
        <span className="transition-all duration-500 bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">
          prove
        </span>{" "}
        it's yours.
      </h1>
      <h3 className="text-gray-500 px-32">
        Easily upload videos to a decentralized network and share them while
        proving they belong to you in the form of ERC721 tokens.
      </h3>
      <div className="flex gap-2 mt-2">
        {address && isLoggedIn ? (
          <UploadFile
            button={
              <Button className="gap-2 group">
                {(user?.data as any)?.videoCount > 0
                  ? "Upload another video"
                  : "Upload your first video "}
                <UploadIcon className="group-hover:animate-pulse" />
              </Button>
            }
            title="Let's upload your video"
            description="Once uploaded, your video will be stored on our peer to peer storage solution and you will then be prompted to mint your video NFT."
            onUpload={onUpload}
            accept={{
              "video/mp4": [".mp4"],
              "video/quicktime": [".mov"],
              "video/x-msvideo": [".avi"],
              "video/webm": [".webm"],
              "video/x-ms-wmv": [".wmv"],
              "video/x-matroska": [".mkv"],
              "video/x-flv": [".flv"],
            }}
          />
        ) : (
          <Connect />
        )}
        {(address && isLoggedIn) && <Button onClick={() => push("/dashboard")} variant="outline">Your videos</Button>}
      </div>
    </div>
  );
};

export default Home;
