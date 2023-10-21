import unsplash from "@/utils/unsplash";
import List from "./component/List";
import Paging from "@/components/paging/Paging";

async function getData(page = 1) {
  const data = await unsplash("collections", "page=" + page);
  return data;
}

const Collection = async ({ searchParams }) => {
  const { page } = searchParams;
  const data = await getData(page || 1);

  return (
    <>
      <List data={data} />
      <Paging page={page} />
    </>
  );
};

export default Collection;
