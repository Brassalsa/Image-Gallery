"use client";
import { ThemeContext } from "@/context/themeContext";
import Image from "next/image";
import { useContext, useState } from "react";
import ViewImage from "../viewImage/viewImage";

const Card = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  let className = theme === "dark" ? "bg-slate-950 " : "";

  const { urls, user, likes, alt_description } = data;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={
          " flex  flex-col border border-gray-800 rounded-md overflow-hidden cursor-pointer h-fit hover:opacity-80 " +
          className
        }
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="w-full flex-1">
          <Image
            src={urls?.regular}
            width={0}
            height={0}
            sizes="30vw"
            style={{ width: "100%", height: "auto" }}
            className="object-contain"
            alt={alt_description}
          />
        </div>
        <div
          className={
            "flex gap-2  items-center bg-primBg text-primText p-1 " + className
          }
        >
          <Image
            src={user.profile_image.medium}
            height={30}
            width={30}
            className="rounded-full
          h-8 aspect-[1/1]"
            alt="author img"
          />
          <span>{user.username}</span>
          <span className="justify-end">❤️ {likes}</span>
        </div>
      </div>
      <ViewImage data={data} open={open} setOpen={setOpen} />
    </>
  );
};

export default Card;
