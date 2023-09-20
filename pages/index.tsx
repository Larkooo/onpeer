import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { UploadFile } from "components/UploadFile";
import { Button } from "@/components/ui/button";

const Home: NextPage = () => {
  const address = useAddress();
  const { login } = useLogin();
  const { logout } = useLogout();
  const { user, isLoggedIn } = useUser();
  const [secret, setSecret] = useState();

  const onUpload = async (files: File[]) => {
    const data = new FormData();
    data.append("file", files[0]);

    const resSig = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    console.log(await resSig.json());
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => logout()}>Logout</button>
      ) : address ? (
        <button onClick={() => login()}>Login</button>
      ) : (
        <ConnectWallet theme="dark" />
      )}
      <UploadFile
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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <pre>Connected Wallet: {address}</pre>
      <pre>User: {JSON.stringify(user, undefined, 2) || "N/A"}</pre>
      <pre>Secret: {secret || "N/A"}</pre>
    </div>
  );
};

export default Home;
