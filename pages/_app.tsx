import "styles/globals.css";

import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Contracts from "../constants/contracts";

const chains = Contracts.map((c) => c.chain);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.THIRDWEB_CLIENT_ID || ""}
      secretKey={process.env.THIRDWEB_SECRET_KEY || ""}
      activeChain={chains[0]}
      supportedChains={chains}
      authConfig={{
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
        authUrl: "/api/auth",
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
