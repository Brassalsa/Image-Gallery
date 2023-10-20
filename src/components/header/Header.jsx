import React from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className="h-[20%] py-8 flex gap-2 mx-auto max-w-7xl justify-around">
      <h1 className="text-xl  text-center flex-1">Image Gallery</h1>
      <Navbar />
    </div>
  );
};

export default Header;
