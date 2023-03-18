import React, { useState } from "react";
import Lottie from "lottie-react";
import Stream from "../public/Stream.json";
import Link from "next/link";

function Main() {
  const [isVisable, setIsVisable] = useState(false);
  console.log(isVisable);

  return (
    <div>
      <div className="bg-blue-500 flex justify-center text-white text-lg bg-gradient-to-r from-blue-600 to-blue-400">
        MetaStream
      </div>

      <div className="min-h-screen bg-gradient-to-r from-[#2980B9] via-[#6DD5FA] to-white pt-20 max-sm:px-5 px-5">
        <div className="flex flex-row max-sm:flex-col justify-evenly gap-10">
          <div className="">
            <h1 className="text-4xl text-white">MetaStream</h1>
            <div className="flex flex-col gap-4 mt-10 items-start min-w-[400px]">
              <Link href="StartSession">
                <button className="rounded p-4 text-xl bg-[#F89D0A] text-white">
                  START SESSION
                </button>
              </Link>

              <button className="rounded p-4 text-xl bg-[#F89D0A] text-white">
                JOIN SESSION
              </button>
              <Link href="Settings">
                <button className="rounded p-4 text-xl bg-[#F89D0A] text-white">
                  Watch to earn
                </button>
              </Link>

              <button
                className="rounded p-4 text-xl bg-[#F89D0A] text-white"
                onClick={() => setIsVisable(!isVisable)}
              >
                DONATE
              </button>
              {isVisable && (
                <div className="text-gray-300">
                  <p>If you wish to donate it would be much appreciated ^_^ </p>
                  <p>0x9da800B4585907bef289003d3a5aD43753a8Cca8</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col text-gray-500 gap-8 items-start">
            <h1 className="text-3xl text-gray-600">Welcome</h1>
            <main className="text-lg max-sm:text-sm ">
              <p>Hi there, and welcome to MetaStream!</p>
              <p>
                We're glad you're here and excited to have you try out our
                platform.
              </p>
              <p>
                With MetaStream, you can start and join video sessions with
                ease.
              </p>
              <p>
                Whether you're hosting a watch party, collaborating on a
                project, or simply hanging out with friends, we've got you
                covered.
              </p>
              <p>
                As a MVP, our product is still in development, but we're working
                hard to bring you new features and improvements.
              </p>
              <p>
                If you have any feedback or suggestions, we'd love to hear from
                you. Just click on the "Settings" button to get in touch with
                us.
              </p>
              <p>Thanks for choosing MetaStream!</p>
              <Lottie
                animationData={Stream}
                className="w-[500px] pt-20 max-md:w-96 "
              />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
