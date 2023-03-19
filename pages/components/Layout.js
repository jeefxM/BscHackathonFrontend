import React from "react";
import PageMeta from "./PageMeta";
import Footer from "./Footer";
import Copyright from "./Copyright";

const Layout = ({ children, toggle }) => {
  console.log(toggle);
  return (
    <div className="bg-[#003FF7] dark:bg-black">
      <PageMeta toggle={toggle} />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
};

export default Layout;
