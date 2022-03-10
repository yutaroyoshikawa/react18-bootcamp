import type { FC } from "react";
import { Heading } from "../features/app/components/Heading";
import { useTheme } from "../features/app/modules/themeHooks";

export const HomePageContent: FC = () => {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <Heading tag="h1">トップページ</Heading>
      <>{theme}</>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        toggle
      </button>
    </>
  );
};
