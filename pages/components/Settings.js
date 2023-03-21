import React from "react";
import MetamaskConnect from "./components/metamaskConnect";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import {
  useAddress,
  ConnectWallet,
  useContract,
  useNFTBalance,
  useBalance,
} from "@thirdweb-dev/react";
import { useState, useEffect, useMemo } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

function Settings() {
  const address = useAddress();
  const editionDropAddress = "0x74d68bEd595cc75d712be61Ed89Ea38cbF7Da2e8";
  const { contract: editionDrop } = useContract(
    editionDropAddress,
    "edition-drop"
  );
  // Hook to check if the user has our NFT
  const { data: nftBalance } = useNFTBalance(editionDrop, address, "0");
  const { data: balance } = useBalance();

  const hasClaimedNFT = useMemo(() => {
    return nftBalance && nftBalance.gt(0);
  }, [nftBalance]);

  return (
    <div className="min-h-screen  bg-gradient-to-r from-[#2a0845] p-10 to-[#fff]">
      <Link href="CreateRoom">
        <MdArrowBack size={40} color="#fff" />
      </Link>

      <div className="mt-5 flex flex-col gap-4 justify-center items-center">
        {hasClaimedNFT ? (
          <div className="flex flex-col gap-10">
            <h1 className="text-white text-4xl font-semibold">
              Thank you for being part a of MetaStream!
            </h1>
            <p className="text-white text-2xl">👀 Your challanges include :</p>
            <nav className="text-white text-lg ">
              <li>Watch a live stream from League of Legends for 10 minutes</li>
              <li>Watch a live stream from Art for 10 minutes</li>
              <li>
                Watch a live stream with viewers less than 10 for 10 minutes
              </li>
            </nav>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-4xl ">
              Join the watch to earn system!{" "}
            </h1>
            <p className="text-white text-2xl">
              Mint an nft to join our Watch to earn system 👀
            </p>

            <img src={"erc1155.png"} className="max-w-[500px] rounded" />
            <div>
              <Web3Button
                contractAddress={editionDropAddress}
                action={(contract) => {
                  if (balance && balance.lt(0.05)) {
                    alert("Not enough funds");
                  } else {
                    contract.erc1155.claim(0, 1);
                  }
                }}
                onSuccess={() => {
                  console.log(
                    `🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`
                  );
                }}
                onError={(error) => {
                  console.error("Failed to mint NFT", error);
                }}
              >
                Mint your NFT (0.05 ETH)
              </Web3Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;

//2a0845
