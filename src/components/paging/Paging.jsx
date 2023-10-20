"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Paging = ({ page = 1 }) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const handleAddParam = (page) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", page);
    router.push(path + "?" + newSearchParams.toString());
  };
  const handleNext = (e) => {
    const next = +page + 1;
    handleAddParam(next);
  };
  const handlePrev = (e) => {
    const prev = +page - 1;
    if (page > 1) handleAddParam(prev);
  };
  return (
    <div className="w-full flex gap-7 justify-center items-center mb-10">
      <button
        className="bg-softBg text-softClr p-2 rounded-md disabled:opacity-70"
        onClick={handlePrev}
        disabled={page <= 1}
      >
        Prev
      </button>
      <button
        className="bg-softBg text-softClr p-2 rounded-md"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Paging;
