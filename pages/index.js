import { useEffect, useMemo, useState } from "react";
import { Button } from "@geist-ui/core";
import { MdRefresh, MdArrowForward } from "react-icons/md";

import Link from "next/link";
const LivepeerAuth = () => {
  const [imgUrl, updateImg] = useState("");
  const [avatarName, updateAvatarName] = useState();

  useEffect(() => {
    if (localStorage.getItem("avatar")) {
      updateImg(localStorage.getItem("avatar"));
    } else {
      updateImg("https://api.dicebear.com/5.x/pixel-art/svg?seed=Niko");
    }
  });

  const getRandomAvatar = async () => {
    const res = await fetch(
      `https://api.dicebear.com/5.x/pixel-art/svg?seed=${avatarName}`
    );

    updateImg(res.url);

    localStorage.setItem("avatar", res.url);
    localStorage.setItem("name", avatarName);
  };

  return (
    <div className="w-[80%] h-screen m-auto flex  flex-col items-center justify-center">
      <img src={imgUrl} alt="avatar" className="w-[200px]"></img>
      <div className="inputs flex gap-2 p-5">
        <input
          className="rounded-md p-2 border-2 border-black"
          type="text"
          placeholder="enter your name"
          onChange={(e) => updateAvatarName(e.target.value)}
        />
        <Button
          auto
          onClick={getRandomAvatar}
          scale={2}
          style={{
            backgroundColor: "#F89D0A",
            color: "white",
            border: "black solid 2px",
          }}
        >
          <MdRefresh className="mr-1" />
          Generate
        </Button>
      </div>
      <div className="move block">
        <Link href="/CreateRoom">
          <Button
            auto
            scale={2}
            style={{
              backgroundColor: "#43DA49",
              color: "white",
              border: "black solid 2px",
            }}
          >
            Move <MdArrowForward className="ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LivepeerAuth;
