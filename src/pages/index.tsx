import type { NextPage } from "next";
import { useTheme } from "../features/appSettings/modules/themeHooks";
import { Repos } from "../features/repos/components/Repos";

const Home: NextPage = () => {
  const [theme, setTheme] = useTheme();
  return (
    <>
      <p>{theme}</p>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        toggle theme
      </button>
      <Repos org="mixigroup" />
    </>
  );
};

export default Home;
