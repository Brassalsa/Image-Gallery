import CardList from "@/components/cardList/CardList";
import unsplash from "@/utils/unsplash";
import React from "react";

async function getData(id, page = 1) {
  const res = await fetch(unsplash("topics/" + id + "/photos", "page=" + page));

  return res.json();
}

const TopicPhotos = async ({ params, searchParams }) => {
  const { id } = params;
  const { page } = searchParams;
  const data = await getData(id, page || 1);
  return (
    <div>
      <CardList data={data} page={page} />
    </div>
  );
};

export default TopicPhotos;
