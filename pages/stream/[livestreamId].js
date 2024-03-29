import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/offline.jpg";
import { Player } from "@livepeer/react";
import Chat from "../components/chat";
import { Input } from "@geist-ui/core";

export async function getServerSideProps({ params }) {
  const res = await fetch(`/api/stream/${params.livestreamId}`, {
    method: "GET",
    // headers: {
    //   Authorization: `Bearer deab6d40-4494-4b17-880d-777e3e348db2`,
    //   "Content-Type": "application/json",
    // },
  });

  const data = await res.json();

  return {
    props: {
      stream: data,
    },
  };
}

export default function StreamDetails({ stream }) {
  const {
    query: { id },
  } = useRouter();

  return (
    <div className="overflow-visible">
      <div className="font-main  min-h-[120vh]  ">
        <div className="stream flex flex-col mx-2 relative ">
          <div className="stream-info text-white flex flex-row items-center">
            <h2 className="">📹</h2>
            <h1 className=""> {stream.name}</h1>
          </div>
          <div className="flex flex-row sm:flex-col">
            <div
              className="w-4/6  h-[100%] border-2 border-black  dark:border-white sm:h-[40vh] sm:w-full sm:gap-12 rounded-2xl "
              key={id}
            >
              {stream.isActive ? (
                <div className="w-full h-full">
                  <Player
                    playbackId={`${stream.playbackId}`}
                    className="  min-h-full min-w-full "
                    autoPlay={true}
                    loop
                    muted
                  />
                </div>
              ) : (
                <div className="w-full h-full">
                  <Image
                    src={logo}
                    alt="Livepeer Studio Logo"
                    className="aspect-[2/1]  rounded-xl min-h-full min-w-full"
                  />
                </div>
              )}
            </div>
            <div className="w-96 bg-white sm:mt-3 ml-3 sm:w-96">
              <Chat />
            </div>
          </div>
          <div className="pt-3 flex flex-col gap-2 mb-5">
            <Input.Password
              label="Stream Key"
              className="streamkey"
              initialValue={stream.streamKey}
              scale={2}
            />
            <Input
              label="Server"
              className="streamkey"
              initialValue={`rtmp://rtmp.livepeer.com/live/
            `}
              scale={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
