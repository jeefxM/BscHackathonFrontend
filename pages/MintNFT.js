import React from "react";
import {
  useAddress,
  useNFTBalance,
  useBalance,
  useContract,
} from "@thirdweb-dev/react";

import { useMemo } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

function MintNFT() {
  const address = useAddress();
  const editionDropAddress = "0x069F2B276b7A42d9b53db12deE3146d8dD7a04c8";
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
          <div className="flex flex-col gap-10 ">
            <h1 className="text-white text-4xl font-semibold max-sm:text-2xl">
              Thank you for being part a of MetaStream!
            </h1>
            <p className="text-white text-2xl">👀 Today challanges include :</p>
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
            <h1 className="text-white text-4xl max-sm:text-xl">
              Join the watch to earn system!{" "}
            </h1>
            <p className="text-white text-2xl max-sm:text-base">
              Mint an nft to join our Watch to earn system 👀
            </p>
            <Link href="FAQ">
              <p className="text-white">
                How the heck does all of this work ?! F.A.Q
              </p>
            </Link>

            <img
              src={"erc1155.png"}
              className="max-w-[500px] max-sm:max-w-[300px] rounded"
              alt="test"
            />
            <div className="w-[465px] max-sm:w-[265px]">
              <Web3Button
                contractAddress={editionDropAddress}
                action={(contract) => {
                  contract.erc1155.claim(0, 1);
                }}
                onSuccess={() => {
                  console.log(
                    `🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/bsc-testnet${editionDrop.getAddress()}/0`
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

export default MintNFT;
