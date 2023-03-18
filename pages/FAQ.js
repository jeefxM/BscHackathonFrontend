import React from "react";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const FAQ = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#2a0845] p-10 to-[#fff]">
      <Link href="../MintNFT" className="absolute top-10 left-10">
        <MdArrowBack size={40} color="#fff" />
      </Link>
      <div className="bg-[#d2d4da] mt-20 mb-10 rounded-3xl">
        <div className="max-w-3xl mx-auto p-4">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions (F.A.Q)
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">
                What is the Watch and Earn system?
              </h3>
              <p className="text-gray-700">
                The Watch and Earn system is a feature on MetaStream, a
                decentralized streaming platform, that allows viewers to earn
                rewards for watching and interacting with content on the
                platform. By completing daily challenges, viewers can earn a
                portion of the pool contract, which consists of funds from the
                sale of our NFT ERC-1155 tokens.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                How can I participate in the Watch and Earn system?
              </h3>
              <p className="text-gray-700">
                To participate in the Watch and Earn system, you can mint our
                NFT ERC-1155 tokens for 1 BNB. Once you've minted the NFT, you
                will automatically receive 3 random challenges everyday. By
                completing the daily challenges, you can earn a portion of the
                pool contract.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                How are the rewards distributed?
              </h3>
              <p className="text-gray-700">
                80% of the funds from the sale of our NFT ERC-1155 tokens will
                go to viewers, while the remaining 20% will go to creators. The
                rewards are distributed through the pool contract, which is
                divided among viewers who successfully complete the daily
                challenges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Will there be a native token for the Watch and Earn system?
              </h3>
              <p className="text-gray-700">
                Yes, we are planning to release an ERC20 token in the future to
                encourage the use of our platform. We are also planning to
                create our own NFT marketplace, where creators can create
                collections and users can buy them with our native tokens. We
                are also planning to create staking options for our tokens to
                strengthen the coin.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                What blockchain is the Watch and Earn system based on?
              </h3>
              <p className="text-gray-700">
                The Watch and Earn system is based on the Binance Smart Chain
                (BSC).
              </p>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default FAQ;
