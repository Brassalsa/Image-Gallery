import CardList from "@/components/cardList/CardList";
import Search from "@/components/search/Search";
import Image from "next/image";
import unsplash from "@/utils/unsplash";

async function getData(page = 1) {
  const data = await unsplash("photos", "page=" + page);
  return data;
}

export default async function Home({ searchParams }) {
  const { page } = searchParams;

  const data = await getData(page || 1);

  return (
    <div>
      <div className="h-80 relative flex flex-col items-center justify-center text-white font-bold mb-12">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1685977494926-d1f8efd44c3c?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="absolute object-cover z-10"
          fill
          sizes="100vw"
          alt=".."
        />
        <div className="h-full z-20 flex flex-col items-center justify-center text-white font-bold gap-3">
          <h1 className="text-4xl text-center">
            Download High Quality Images by Creators
          </h1>
          <p className="text-center">
            Over 2.4 million+ stock Images by our talented community
          </p>
          <Search
            placeholder={"Search High Resolution Images"}
            className="w-full rounded-md p-2 mx-auto text-slate-900 outline-none "
          />
        </div>
      </div>
      <CardList data={data} page={page} />
    </div>
  );
}
