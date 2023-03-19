import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Stream from "../public/Stream.json";
import Link from "next/link";
import Stars from "../public/abstract-stars.json";
import { useRouter } from "next/router";
import { Button, Modal, Input, Toggle, Spacer } from "@geist-ui/core";
import { MdAdd, MdStar } from "react-icons/md";
import PageMeta from "./components/PageMeta";
import Footer from "./components/Footer";
import HomeCard from "./components/HomeCard";

function Main() {
  const [isVisable, setIsVisable] = useState(false);
  const [firstModal, setFirstModal] = useState(false);
  const firstHandler = () => setFirstModal(true);
  const closeFirstHandler = (event) => {
    setFirstModal(false);
    console.log("closed");
  };

  const [secondModal, setSecondModal] = useState(false);
  const secondHandler = () => setSecondModal(true);
  const closeSecondHandler = (event) => {
    setSecondModal(false);
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
  //path to join stream

  const [streamPath, updateStreamPath] = useState("");

  async function joinExistingStream() {
    const res = await fetch(
      `https://livepeer.studio/api/stream/${streamPath}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.LIVEPEER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    router.push(`/stream/${streamPath}`);
  }
  const [theme, changeTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  //darkmode

  const toggleTheme = () => {
    setTimeout(() => {
      changeTheme(theme === "dark" ? "light" : "dark");
    }, 100);
  };

  return (
    <div className="font-main bg-gradient-to-b from-[#003FF7] to-[#6243b3fa] dark:bg-black min-h-screen   ">
      <PageMeta />

      <div className="   pt-32 sm:pt-20  w-full  ">
        <div className="toggle absolute top-14 right-20 sm:right-10">
          <Spacer h={0.5} />
          <Toggle scale={3} onClick={toggleTheme} />
        </div>
        <div className="flex flex-col justify-center gap-10 w-[70%] m-auto  ">
          <div className="header w-full relative ">
            <h1 className="text-5xl text-white leading-15 sm:text-4xl text-center ">
              <span className="animated-text  ">
                Decentralized Streaming Platform,
              </span>
              <br /> Create your own video experiences
            </h1>
            <span className="absolute left-52  bottom-5 sm:bottom-0">
              <Lottie
                animationData={Stars}
                style={{ height: "100px", width: "100px" }}
              />
            </span>
          </div>
          <div className=" flex justify-center pt-5 sm:flex-col sm:pt-1 sm:items-center ">
            <div className="modal mx-4">
              <Button
                auto
                onClick={firstHandler}
                scale={2}
                style={{
                  backgroundColor: "#F89D0A",
                  color: "white",
                  border: "black solid 2px",
                }}
              >
                <MdAdd className="mr-1" />
                Create Stream
              </Button>

              <Modal
                visible={firstModal}
                onClose={closeFirstHandler}
                key="firstmodal"
              >
                <Modal.Title>Modal</Modal.Title>
                <Modal.Content>
                  <p>Write name of your stream:</p>
                </Modal.Content>
                <Input
                  width="100%"
                  onChange={(e) => setStreamName(e.target.value)}
                ></Input>
                <Modal.Action passive onClick={() => closeFirstHandler(false)}>
                  Cancel
                </Modal.Action>
                <Modal.Action onClick={createNewStream}>SUBMITZ</Modal.Action>
              </Modal>
            </div>
            <div className="modal join mx-4 sm:pt-5">
              <Button
                auto
                onClick={secondHandler}
                scale={2}
                style={{
                  backgroundColor: "#43DA49",
                  color: "white",
                  border: "black solid 2px",
                }}
              >
                <MdStar className="mr-1" />
                Join Stream
              </Button>

              <Modal
                visible={secondModal}
                onClose={closeSecondHandler}
                key="secondmodal"
              >
                <Modal.Title>Modal</Modal.Title>
                <Modal.Content>
                  <p>Write name of your stream:</p>
                </Modal.Content>
                <Input
                  width="100%"
                  onChange={(e) => updateStreamPath(e.target.value)}
                ></Input>
                <Modal.Action passive onClick={() => closeSecondHandler(false)}>
                  Cancel
                </Modal.Action>
                <Modal.Action onClick={joinExistingStream}>
                  Submit2
                </Modal.Action>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <HomeCard />
      <Footer />
    </div>
  );
}

export default Main;
