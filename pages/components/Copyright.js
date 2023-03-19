import React from "react";
import Link from "next/link";

const Copyright = () => {
  return (
    <div className="w-full h-9 flex justify-center items-center font-main dark:bg-black text-white border-t-2 border-white max-[640px]:h-16 mt-4">
      <div className="font-semibold flex pb-2 ">
        <Link href="https://tsredi.com" className="text-white">
          ©2023 Powered by Tsredi. All rights reserved
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
