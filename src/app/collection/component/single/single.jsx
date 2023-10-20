"use client";
import { ThemeContext } from "@/context/themeContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Single = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const className = theme === "dark" ? "bg-slate-950" : "";

  const { user, title, urls, cover_photo, id } = data;
  return (
    <Link
      href={"/collection/photos/" + id}
      className={
        " flex flex-col border border-gray-800 rounded-md overflow-hidden cursor-pointer h-fit " +
        className
      }
    >
      <div className="w-full flex-1">
        <Image
          src={cover_photo?.urls.regular}
          width={0}
          height={0}
          sizes="30vw"
          style={{ width: "100%", height: "auto" }}
          className="object-contain"
          alt={"alt_description"}
        />
      </div>
      <b className="text-center">{title}</b>
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
        <span className="justify-end">Likes {user.total_likes}</span>
      </div>
    </Link>
  );
};

export default Single;
