"use client";
import Image from "next/image";
import Link from "next/link";

const ViewImage = ({ data, open, setOpen }) => {
  const { urls, user, likes, alt_description, description } = data;
  console.log(data);

  if (open)
    return (
      <div
        className="w-[100vw] h-[100vh] bg-black fixed  top-0 left-0 right-0 bottom-0 z-50 flex flex-col py-6 px-4 bg-opacity-70 text-white"
        onClick={() => {
          setOpen(false);
        }}
      >
        <button
          className="self-end px-2"
          onClick={() => {
            setOpen(false);
          }}
        >
          ❌
        </button>
        <div className="w-[100%]  h-[100%]  relative mx-auto">
          <Image
            src={urls?.regular}
            fill
            sizes="100vw"
            className="object-contain"
            alt={alt_description}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </div>
        <div
          className={"flex gap-2  items-center p-1 "}
          onClick={(e) => e.stopPropagation()}
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
          <span className="justify-end ">❤️ {likes}</span>
          <Link href={urls.regular} download className="text-blue-300">
            HD
          </Link>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {description}
        </div>
      </div>
    );
};

export default ViewImage;
