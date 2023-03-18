import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Main from "./CreateRoom";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";

const activeChainId = ChainId.Goerli;
const inter = Inter({ subsets: ["latin"] });

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
