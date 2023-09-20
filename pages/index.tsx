import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { UploadFile } from "components/UploadFile";
import { Button } from "@/components/ui/button";


const Home: NextPage = () => {
  const address = useAddress();
  const { login } = useLogin();
  const { logout } = useLogout();
  const { user, isLoggedIn } = useUser();
  const [secret, setSecret] = useState();

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => logout()}>Logout</button>
      ) : address ? (
        <button onClick={() => login()}>Login</button>
      ) : (
        <ConnectWallet theme="dark" />
      )}
      <UploadFile />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

      <pre>Connected Wallet: {address}</pre>
      <pre>User: {JSON.stringify(user, undefined, 2) || "N/A"}</pre>
      <pre>Secret: {secret || "N/A"}</pre>
    </div>
  );
};

export default Home;
