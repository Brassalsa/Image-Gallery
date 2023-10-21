"use client";

import { useState } from "react";

const Burger = ({ children }) => {
  const [open, setOpen] = useState(false);
  const className = " absolute top-0 right-0 z-30 p-7 ";
  return (
    <div className={"cursor-pointer absolute " + className}>
      <span onClick={() => setOpen(true)}>
        <svg
          viewBox="0 0 100 80"
          width="25"
          height="25"
          className="text-softClr fill-softClr"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </span>
      {open && (
        <div
          className={
            "cursor-pointer flex flex-col gap-3 bg-softBg  rounded-md h-[100vh] bg-opacity-80" +
            className
          }
          onClick={(e) => setOpen(false)}
        >
          <span
            className={"self-end text-2xl w-fit"}
            onClick={(e) => {
              setOpen(false);
              e.stopPropagation();
            }}
          >
            X
          </span>
          {children}
        </div>
      )}
    </div>
  );
};

export default Burger;
