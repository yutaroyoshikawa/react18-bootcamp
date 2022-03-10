import type { FC } from "react";
import { useTest } from "../../src/features/app/modules/testHooks";
import { Heading } from "../features/app/components/Heading";
import { useTheme } from "../features/app/modules/themeHooks";

export const HomePageContent: FC = () => {
  const [theme, setTheme] = useTheme();

  const state = useTest({ name: "hello world" });

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
      <p>{JSON.stringify(state)}</p>
    </>
  );
};
