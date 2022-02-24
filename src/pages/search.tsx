import type { NextPage } from "next";
import { useState } from "react";

const SearchPage: NextPage = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <input
      type="text"
      value={keyword}
      onChange={(event) => setKeyword(event.target.value)}
    />
  );
};

export default SearchPage;
