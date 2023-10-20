"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  const px = theme == "light" ? " right-0" : "left-0";

  return (
    <div className="cursor-pointer">
      <span
        className="border border-softClr bg-softBg w-12 rounded-lg flex items-center  relative gap-1"
        onClick={toggle}
      >
        <span>🌙</span>
        <span
          className={"w-[48%] h-[95%] absolute rounded-full bg-softClr " + px}
        ></span>
        <span>☀️</span>
      </span>
    </div>
  );
}

export default ThemeToggle;
