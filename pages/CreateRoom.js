import React, { useState } from "react";
import Lottie from "lottie-react";
import Stream from "../public/Stream.json";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Modal, Input } from "@geist-ui/core";

function Main() {
  const [isVisable, setIsVisable] = useState(false);
  const [state, setState] = useState(false);
  const handler = () => setState(true);
  const closeHandler = (event) => {
    setState(false);
    console.log("closed");
  };

  const router = useRouter();
  const [streamName, setStreamName] = useState("");
  const profiles = [
    {
      name: "720p",
      bitrate: 2000000,
      fps: 30,
      width: 1280,
      height: 720,
    },
    {
      name: "480p",
      bitrate: 1000000,
      fps: 30,
      width: 854,
      height: 480,
    },
    {
      name: "360p",
      bitrate: 500000,
      fps: 30,
      width: 640,
      height: 360,
    },
  ];

  async function createNewStream() {
    try {
      const response = await fetch("/api/createStream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: streamName,
          profiles,
        }),
      });

      setStreamName("");

      const data = await response.json();
      router.push(`/stream/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  }

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
              <div className="modal">
                <Button auto onClick={handler}>
                  Show Modal
                </Button>

                <Modal visible={state} onClose={closeHandler}>
                  <Modal.Title>Modal</Modal.Title>
                  <Modal.Content>
                    <p>Write name of your stream:</p>
                  </Modal.Content>
                  <Input
                    width="100%"
                    onChange={(e) => setStreamName(e.target.value)}
                  ></Input>
                  <Modal.Action passive onClick={() => setState(false)}>
                    Cancel
                  </Modal.Action>
                  <Modal.Action onClick={createNewStream}>Submit</Modal.Action>
                </Modal>
              </div>

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
