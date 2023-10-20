import Empty from "../empty/Empty";
import Paging from "../paging/Paging";
import Card from "./card/Card";

const CardList = ({ data, page = 1 }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center w-full">
      {data?.length > 0 ? (
        data?.map((item, index) => (
          <Card key={item.id} data={item} index={index} list={data} />
        ))
      ) : (
        <Empty />
      )}
      <Paging page={page} />
    </div>
  );
};

export default CardList;
