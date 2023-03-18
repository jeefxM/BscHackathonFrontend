import "../styles/globals.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.LIVEPEER_API_KEY,
  }),
});

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={ChainId.Goerli}>
      <LivepeerConfig client={livepeerClient}>
        <GeistProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </GeistProvider>
      </LivepeerConfig>
    </ThirdwebProvider>
  );
}
