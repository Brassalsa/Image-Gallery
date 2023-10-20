import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import Search from "../search/Search";
import Burger from "./Burger";
import SearchIcon from "./SearchIcon";

const Navbar = () => {
  return (
    <>
      <nav className="hidden sm:flex gap-4 justify-stretch flex-1 pr-2">
        <Search
          placeholder="Search Images Here"
          className="rounded-md bg-softBg text-softClr p-1  min-w-full"
        />
        <Link href="/">Explore</Link>
        <Link href={"/collection"}>Collection</Link>
        <Link href={"/topics"}>Topics</Link>
        <ThemeToggle />
      </nav>
      <nav className="sm:hidden justify-self-end pr-2">
        <Burger>
          <ThemeToggle />
          <Search
            placeholder="Search Images Here"
            className="rounded-md bg-primBg text-primText p-1  min-w-full"
          />
          <Link href="/">Explore</Link>
          <Link href={"/collection"}>Collection</Link>
          <Link href={"/topics"}>Topics</Link>
        </Burger>
      </nav>
    </>
  );
};

export default Navbar;
