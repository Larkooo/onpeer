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
    <header className="flex items-center w-full backdrop-blur-sm border-b-2 p-2">
      <span className="text-4xl font-bold">
        on<span className="transition-all duration-500 bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">peer</span>
      </span>
      <div className="w-full" />
      <Connect />
    </header>
  );
};

export default Header;
