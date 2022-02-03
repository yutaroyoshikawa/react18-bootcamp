import type { NextPage } from "next";
import { Repos } from "../features/repos/components/Repos";

const Home: NextPage = () => {
  return <Repos org="mixigroup" />;
};

export default Home;
