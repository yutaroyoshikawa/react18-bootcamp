import type { FC } from "react";
import { useTest } from "../../src/features/app/modules/testHooks";
import { BaseLayout } from "../features/app/components/BaseLayout";
import { Heading } from "../features/app/components/Heading";
import { useTheme } from "../features/app/modules/themeHooks";

export const Home: FC = () => {
  return (
    <>
      {/* <Helmet title="トップページ" /> */}
      <BaseLayout>
        <PageContent />
      </BaseLayout>
    </>
  );
};

const PageContent: FC = () => {
  const [theme, setTheme] = useTheme();

  const state = useTest({ name: "hello world" });

  return (
    <>
      <Heading tag="h1" variant={theme}>
        トップページ
      </Heading>
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
