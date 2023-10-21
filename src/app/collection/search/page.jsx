import unsplash from "@/utils/unsplash";
import List from "../component/List";
import Paging from "@/components/paging/Paging";

async function getData(page = 1, query = "") {
  const res = await unsplash(
    "search/collections",
    "query=" + query + "&page=" + page
  );

  return res;
}

const SearchCollectionResults = async ({ searchParams }) => {
  const { page, query } = searchParams;
  const data = await getData(page || 1, query || "");
  console.log(page);
  return (
    <div>
      <List data={data.results} />
      <Paging page={page} />
    </div>
  );
};

export default SearchCollectionResults;
