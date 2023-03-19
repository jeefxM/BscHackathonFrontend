import Main from "./CreateRoom";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";

const activeChainId = ChainId.BinanceSmartChainTestnet;

export default function Home() {
  return (
    <ThirdwebProvider
      activeChain={activeChainId}
      className="min-h-screen bg-[#0F172A] "
    >
      <Main />
    </ThirdwebProvider>
  );
}
