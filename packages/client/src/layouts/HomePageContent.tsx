import type { FC } from "react";
import { Heading } from "../features/app/components/Heading";
import { useTest } from "../features/app/modules/testHooks";

export const HomePageContent: FC = () => {
  const testState = useTest();

  return (
    <>
      <Heading tag="h1">トップページ</Heading>
      <>{JSON.stringify(testState)}</>
    </>
  );
};
