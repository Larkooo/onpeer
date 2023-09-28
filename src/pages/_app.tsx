import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Contract } from "../../constants/contracts";
import { Canvas, createRoot } from "@react-three/fiber";
import Header from "../components/Header";
import {
  CameraControls,
  MeshDistortMaterial,
  RoundedBox,
  useCubeCamera,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from "next/router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
  LivepeerConfig,
  createClient,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useApollo } from "src/lib/apolloClient";
import Head from "next/head";

const livepeer = createReactClient({
  provider: studioProvider({
    apiKey: process.env.LIVEPEER_API_KEY!,
  }),
});

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const client = useApollo(pageProps);

  return (
    <LivepeerConfig client={livepeer}>
      <ApolloProvider client={client}>
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
          <Head>
            <title>onpeer</title>
            <meta name="theme-color" content="e9590c" />
          </Head>
          <TooltipProvider>
            {/* <div className="absolute w-full h-full -z-1" id="canvas-container">
        <Scene />
      </div> */}
            <div className="flex flex-col relative h-screen max-h-screen">
              {pathname !== "/" && <Header />}
              <div className="flex-1">
                <Component {...pageProps} />
              </div>
              <Toaster />
            </div>
          </TooltipProvider>
        </ThirdwebProvider>
      </ApolloProvider>
    </LivepeerConfig>
  );
}

export default MyApp;
