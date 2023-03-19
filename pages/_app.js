import "../styles/globals.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.LIVEPEER_API_KEY,
  }),
});

export default function App({ Component, pageProps }) {
  const [theme, changeTheme] = useState("dark");

  //darkmode

  const toggleTheme = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <ThirdwebProvider activeChain={ChainId.BinanceSmartChainTestnet}>
      <LivepeerConfig client={livepeerClient}>
        <GeistProvider>
          <CssBaseline />
          <Layout toggle={toggleTheme}>
            <Component {...pageProps} toggle={toggleTheme} />
          </Layout>
        </GeistProvider>
      </LivepeerConfig>
    </ThirdwebProvider>
  );
}
