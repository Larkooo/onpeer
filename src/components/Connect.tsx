import { Button } from "@/components/ui/button";
import { CubeIcon } from "@radix-ui/react-icons";
import { ConnectWallet, useAddress, useSDK } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

const Connect = () => {
  const address = useAddress();
  const [ens, setEns] = useState<string>();
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
  };

  return <ConnectWallet
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
  />;
};

export default Connect;
