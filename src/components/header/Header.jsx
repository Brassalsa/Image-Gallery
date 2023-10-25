"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const ref = useRef(null);
  let [scroll, setScroll] = useState();

  useEffect(() => {
    setScroll(window.scrollY);
    window.onscroll = function () {
      let curScrollPos = window.scrollY;
      if (scroll > curScrollPos) {
        ref.current.style.top = 0;
      } else {
        ref.current.style.top = "-200px";
      }
      setScroll(curScrollPos);
    };
  }, [scroll]);
  return (
    <div
      className="h-24 py-8 flex gap-2 mx-auto max-w-7xl justify-around z-50 fixed right-0 left-0 bg-primBg rounded-b-md transition-all duration-300"
      ref={ref}
    >
      <h1 className="text-xl  text-center flex-1">Image Gallery</h1>
      <Navbar />
    </div>
  );
};

export default Header;
