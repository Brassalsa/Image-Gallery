import React from "react";
import Search from "@/components/search/Search";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 pb-9 justify-center items-center ">
      <Search
        placeholder="Search Collection"
        className=" p-2 rounded-md bg-softBg text-softClr w-[80%] placeholder:text-center mx-auto"
        route="/collection/search?query="
      />
      {children}
    </div>
  );
};

export default Layout;
