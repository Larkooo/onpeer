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
import { useEffect, useState } from "react";
import Connect from "./Connect";
import { useRouter } from "next/router";
import usePageLoad from "src/hooks/usePageLoad";

const Header = () => {
  const isPageLoading = usePageLoad();
  const { push } = useRouter();
  const address = useAddress();

  return (
    <header className="z-50 sticky top-0 flex items-center w-full backdrop-blur-sm bg-white bg-opacity-80 border-b-2 p-2">
      <button onClick={() => push("/")}>
        <span className={`text-4xl font-bold select-none ${isPageLoading ? "animate-pulse" : ""}`}>
          on
          <span className="transition-all duration-500 bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">
            peer
          </span>
        </span>
      </button>
      <div className="w-full" />
      <Connect />
    </header>
  );
};

export default Header;
