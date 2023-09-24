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
import { sdk } from "pages/api/upload";
import { useEffect, useState } from "react";

const Header = () => {
  const [ens, setEns] = useState<string>();
  const address = useAddress();
  const sdk = useSDK();

  useEffect(() => {
    if (address) {
      sdk
        ?.getProvider()
        .lookupAddress(address)
        .then((name) => name && setEns(name))
        .catch(() => {});
    }
  }, [address, sdk]);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  return (
    <header className="absolute flex items-center w-full backdrop-blur-sm border-b-2 p-2">
      <span className="text-4xl font-bold">
        on<span className="text-orange-600">peer.</span>
      </span>
      <div className="w-full" />
      <ConnectWallet
        theme="light"
        modalSize="compact"
        switchToActiveChain
        style={{
          backgroundColor: "rgb(234 88 12)",
          color: "white",
        }}
        detailsBtn={() => (
          <Button
            // className="bg-orange-600 bg-opacity-80 border-0 text-white hover:bg-orange-600 hover:text-white active:-mb-2 group"
            // variant="outline"
            className="group"
          >
            <CubeIcon className="mr-2 group-hover:animate-pulse" />
            {ens ?? (address && formatAddress(address))}
          </Button>
        )}
      />
    </header>
  );
};

export default Header;
