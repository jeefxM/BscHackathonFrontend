import React from "react";
import { Spacer, Toggle } from "@geist-ui/core";

const PageMeta = ({ toggle }) => {
  return (
    <div className=" flex justify-center text-white text-lg bg-gradient-to-r border-b border-white h-[8vh] sm:h-[10vh] items-center font-semibold homebackground   relative ">
      <h5>Reimagine livestream possibilities with MetaStream ✨</h5>
      <div className="absolute right-5 top-0 sm:bottom-0">
        <Spacer h={0.5} />
        <Toggle scale={2} onChange={toggle} />
      </div>
    </div>
  );
};

export default PageMeta;
