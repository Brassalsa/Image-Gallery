"use client";

import { useState } from "react";

const SearchIcon = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      Search
      {open && children && <p>X</p>}
    </div>
  );
};

export default SearchIcon;
