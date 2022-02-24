import type { NextPage } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Repos } from "../features/repos/components/Repos";
import { pagePath } from "../pagePath";

const Home: NextPage = () => {
  return (
    <>
      <Link href={pagePath.search()}>検索</Link>
      <Suspense fallback={<div>LOADING...</div>}>
        <Repos org="mixigroup" />
      </Suspense>
    </>
  );
};

export default Home;
