import CardList from "@/components/cardList/CardList";
import unsplash from "@/utils/unsplash";

async function getData(slug, page = 1) {
  const res = await fetch(
    unsplash("search/photos", "query=" + slug + "&page=" + page)
  );
  const data = await res.json();

  return data.results;
}
const SearchPhoto = async ({ params, searchParams }) => {
  const { slug } = params;
  const { page } = searchParams;
  const data = await getData(slug, page || 1);

  return (
    <div>
      <CardList data={data} page={page} />
    </div>
  );
};

export default SearchPhoto;
