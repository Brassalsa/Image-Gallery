"use client";
const Error = (i) => {
  console.log(i);
  return (
    <div className="h-[500px] flex flex-col gap-3 justify-center items-center">
      <h1 className="text-3xl font-bold">500</h1>
      <h1 className="text-lg">Something Went Wrong</h1>
    </div>
  );
};

export default Error;
