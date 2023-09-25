import { Button } from "@/components/ui/button";
import { CubeIcon, Link2Icon } from "@radix-ui/react-icons";
import {
  ConnectWallet,
  useAddress,
  useSDK,
  useThirdwebConfigContext,
  useWallet,
} from "@thirdweb-dev/react";
import Link from "next/link";
import { sdk } from "src/pages/api/upload";
import { useEffect, useState } from "react";
import Connect from "./Connect";

const Header = () => {
  const address = useAddress();
  

  return (
    <header className="absolute flex items-center w-full backdrop-blur-sm border-b-2 p-2">
      <span className="text-4xl font-bold">
        on<span className="text-orange-600">peer.</span>
      </span>
      <div className="w-full" />
      <Connect />
    </header>
  );
};

export default Header;
