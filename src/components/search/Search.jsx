"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Search = ({ placeholder, className = "", route = "/search/" }) => {
  const [inp, setInp] = useState("");
  const router = useRouter();

  function handleChange(e) {
    const value = e.target.value;
    setInp(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push(route + inp);
  }

  return (
    <form className="w-[80%] relative" onSubmit={handleSubmit}>
      <svg
        className="w-4 h-4 text-gray-400 absolute top-[25%] left-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
      <input
        placeholder={placeholder}
        className={"pl-7 " + className}
        value={inp}
        onChange={handleChange}
        autoComplete="text"
      />
    </form>
  );
};

export default Search;
