import { useEffect, useMemo, useState } from "react";
import { Button } from "@geist-ui/core";
import { MdRefresh, MdArrowForward } from "react-icons/md";

import Link from "next/link";
const LivepeerAuth = () => {
  const [imgUrl, updateImg] = useState("");

  const [avatarName, updateAvatarName] = useState();

  const getRandomAvatar = async () => {
    const res = await fetch(
      `https://api.dicebear.com/5.x/pixel-art/svg?seed=${avatarName}`
    );
    updateImg(res.url);
  };
  useEffect(() => {
    if (localStorage.getItem("avatar")) {
      updateImg(localStorage.getItem("avatar"));
    }
  }, []);
  const saveAvatar = () => {
    localStorage.setItem("avatar", imgUrl);
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
        <div className="save  ">
          <Button
            auto
            onClick={saveAvatar}
            scale={2}
            style={{
              backgroundColor: "#43DA49",
              color: "white",
              border: "black solid 2px",
            }}
          >
            Save
          </Button>
        </div>
      </div>
      <div className="move flex gap-2">
        <Link href="/CreateRoom">
          <Button
            auto
            scale={2}
            style={{
              backgroundColor: "#F0D22D",
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
