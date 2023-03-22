import React from "react";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const FAQ = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#2a0845] p-10 to-[#fff]">
      <Link href="../CreateRoom" className="absolute top-10 left-10">
        <MdArrowBack size={40} color="#fff" />
      </Link>
      <div className="bg-[#d2d4da] mt-20 mb-10 rounded-3xl">
        <div className="max-w-3xl mx-auto p-4 ">
          <h2 className="text-3xl font-semibold mb-4 max-sm:text-lg">
            Frequently Asked Questions (F.A.Q)
          </h2>
          <div className="space-y-6 max-sm:text-base mt-10">
            <div className="max-sm:text-base">
              <h3 className="font-semibold mb-2 max-sm:text-lg">
                What is MetaStream?
              </h3>
              <p className="text-gray-700">
                MetaStream is a decentralized streaming platform that is hosted
                on the Fleek decentralized hosting platform. It uses Livepeer
                for decentralized streaming and GUN for decentralized chatting,
                which means that the entire web app is fully decentralized.
                Users can stream on the platform by clicking on Create Stream on
                the main page, naming their stream, and using the provided
                server URL and stream key in OBS or any other streaming app. The
                platform also features a Watch and Earn system where viewers can
                earn rewards by completing daily challenges and a pool contract
                is distributed among successful viewers. MetaStream is centered
                around the Binance Smart Chain and plans to release its own
                ERC20 token and NFT marketplace on the same blockchain in the
                future.
              </p>
            </div>
            <div className="max-sm:text-base">
              <h3 className="font-semibold mb-2 max-sm:text-lg">
                Is the MetaStream platform fully decentralized?
              </h3>
              <p className="text-gray-700">
                Yes, the MetaStream platform is fully decentralized. It is
                hosted on the decentralized hosting platform Fleek, and we use
                Livepeer for decentralized streaming and GUN for decentralized
                chatting system. This means that the entire web app is fully
                decentralized.
              </p>
            </div>
            <div className="max-sm:text-base">
              <h3 className="font-semibold mb-2 max-sm:text-lg">
                How can I stream with MetaStream?
              </h3>
              <p className="text-gray-700">
                To get started with MetaStream, simply click on Create Stream on
                the main page. You will receive a prompt to name your stream.
                Once you have given your stream a name, you will be redirected
                to the streaming page where you can find your live server URL
                and stream key. In OBS, go to File/Settings/Stream Custom and
                fill in the server URL and stream key provided on the MetaStream
                web app. Once your stream is live, the page will automatically
                reload and a live chat will appear for your viewers to interact
                with you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 max-sm:text-lg">
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
            <div className="max-sm:text-base">
              <h3 className="font-semibold mb-2 max-sm:text-lg">
                How can I participate in the Watch and Earn system?
              </h3>
              <p className="text-gray-700">
                To participate in the Watch and Earn system, you can mint our
                NFT ERC-1155 tokens for 1 BNB. Once you have minted the NFT, you
                will automatically receive 3 random challenges everyday. By
                completing the daily challenges, you can earn a portion of the
                pool contract.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 max-sm:text-lg">
                How are the rewards distributed?
              </h3>
              <p className="text-gray-700">
                The project aims to distribute 100% of the funds from the sale
                of ERC-1155 tokens to the viewers. The creators of the NFT
                collections can sell their collections on our NFT marketplace
                and also offer subscriptions to their content that will give
                users exclusive benefits. Viewers can earn rewards by completing
                daily challenges, and these rewards are distributed through a
                pool contract that is divided among successful viewers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 max-sm:text-lg">
                Will there be a native token for the Metastream?
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
              <h3 className="font-semibold mb-2 max-sm:text-lg">
                What blockchain is the MetaStream?
              </h3>
              <p className="text-gray-700">
                Metastream is centered around the Binance Smart Chain. The Watch
                and Earn system is built on the Binance Smart Chain, and we also
                intend to introduce new features such as the NFT marketplace and
                staking on the same blockchain (BSC) in the future.
              </p>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default FAQ;
