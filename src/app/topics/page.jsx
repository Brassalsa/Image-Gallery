import Paging from "@/components/paging/Paging";
import unsplash from "@/utils/unsplash";
import Link from "next/link";
import React from "react";

async function getData(page) {
  const res = await fetch(unsplash("topics", "page=" + page));

  return res.json();
}

const Community = async ({ searchParams }) => {
  const { page } = searchParams;
  const data = await getData(page || 1);
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      {data?.map((item) => (
        <Link
          href={"topics/photos/" + item.id}
          key={item.id}
          className="bg-softBg p-2 rounded-lg w-fit"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Community;
