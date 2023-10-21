"use client";

import ViewImage from "@/components/cardList/viewImage/viewImage";
import Link from "next/link";
import { useState } from "react";

const Result = ({ data }) => {
  const [viewImage, setViewImage] = useState(false);
  if (data?.alt_description)
    return (
      <>
        <span
          onClick={() => setViewImage(true)}
          className="bg-primBg text-primText p-1 w-full rounded-md cursor-pointer capitalize"
        >
          {data.alt_description}
        </span>
        <ViewImage data={data} open={viewImage} setOpen={setViewImage} />
      </>
    );
  else {
    return (
      <Link
        className="bg-primBg text-primText p-1 w-full rounded-md cursor-pointer capitalize"
        href={"/collection/photos/" + data?.id}
      >
        {data?.title}
      </Link>
    );
  }
};

const SearchResults = ({ data, setViewRes }) => {
  const [open, setOpen] = useState(true);

  if (data && data.length > 0)
    return (
      <div
        className={
          "absolute top-8 left-[10%] z-50 bg-softBg rounded-md px-1 py-2 w-[80%] justify-center items-center flex-col gap-2 flex-wrap flex group-onmouse "
        }
        onClick={(e) => setViewRes(true)}
      >
        {data?.map((i) => (
          <Result key={i.id} data={i} />
        ))}
      </div>
    );
};

export default SearchResults;
