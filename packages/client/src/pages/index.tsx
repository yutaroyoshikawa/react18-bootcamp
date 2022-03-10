import type { FC } from "react";
import { Helmet } from "react-helmet";
import { HomePageContent } from "../layouts/HomePageContent";

export const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>トップページ</title>
      </Helmet>
      <HomePageContent />
    </>
  );
};
