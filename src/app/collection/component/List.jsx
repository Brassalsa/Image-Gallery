import Single from "./single/single";

const List = ({ data }) => {
  return (
    <div className="flex gap-4 flex-wrap px-auto  w-full justify-center items-center">
      {data?.map((item) => (
        <Single key={item.id} data={item} />
      ))}
    </div>
  );
};

export default List;
