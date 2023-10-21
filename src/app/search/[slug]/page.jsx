import CardList from "@/components/cardList/CardList";
import unsplash from "@/utils/unsplash";

async function getData(slug, page = 1) {
  const res = await unsplash(
    "search/photos",
    "query=" + slug + "&page=" + page
  );

  return await res.results;
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
