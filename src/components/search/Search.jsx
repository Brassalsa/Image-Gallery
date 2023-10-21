"use client";
import { debounceSearch } from "@/utils/unsplash";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchResults from "./components/SearchResults";

const Search = ({
  placeholder,
  className = "",
  route = "/search/",
  searchRoute = "/search/photos",
}) => {
  const [inp, setInp] = useState("");
  const [viewRes, setViewRes] = useState(false);
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    const handler = setTimeout(async () => {
      const data = await debounceSearch(searchRoute, inp);
      setData(data);
    }, 500);

    return () => clearTimeout(handler);
  }, [inp, searchRoute]);

  function handleChange(e) {
    const value = e.target.value;
    e.target.onfocus;
    setInp(value);
    setViewRes(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push(route + inp);
  }

  return (
    <div
      className="flex flex-col w-full relative group"
      onMouseLeave={() => {
        setViewRes(false);
      }}
      onMouseEnter={() => {
        setViewRes(true);
      }}
      onClick={() => {
        setViewRes(true);
      }}
    >
      <form className="w-[89%] mx-auto relative" onSubmit={handleSubmit}>
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
      {viewRes && (
        <SearchResults
          data={data}
          className={className}
          setViewRes={setViewRes}
        />
      )}
    </div>
  );
};

export default Search;
