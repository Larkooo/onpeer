import "styles/globals.css";

import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Contract } from "../constants/contracts";
import { Canvas, createRoot } from "@react-three/fiber";
import Header from "components/Header";
import { CameraControls, MeshDistortMaterial, RoundedBox, useCubeCamera } from "@react-three/drei";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.THIRDWEB_CLIENT_ID!}
      secretKey={process.env.THIRDWEB_SECRET_KEY!}
      activeChain={Contract.chain}
      supportedChains={[Contract.chain]}
      authConfig={{
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
        authUrl: "/api/auth",
      }}
    >
      {/* <div className="absolute w-full h-full -z-1" id="canvas-container">
        <Scene />
      </div> */}
      <div id="app" className="relative h-screen max-h-screen">
        {/* <Header /> */}
        <Component {...pageProps} />
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
