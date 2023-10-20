import CardList from "@/components/cardList/CardList";
import unsplash from "@/utils/unsplash";
import React from "react";

const getData = async (id, page = 1) => {
  const res = await fetch(
    unsplash(`/collections/${id}/photos`, "page=" + (page || 1))
  );
  return await res.json();
};

const CollectionPhotos = async ({ params, searchParams }) => {
  const { page } = searchParams;
  const data = await getData(params.id, page || 1);

  return (
    <div>
      <CardList data={data} page={page} />
    </div>
  );
};

export default CollectionPhotos;
