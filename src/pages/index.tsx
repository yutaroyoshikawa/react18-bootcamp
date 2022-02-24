import type { NextPage } from "next";
import { Suspense } from "react";
import { Repos } from "../features/repos/components/Repos";

const Home: NextPage = () => {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Repos org="mixigroup" />
    </Suspense>
  );
};

export default Home;
