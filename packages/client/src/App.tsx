import { FC, useEffect } from "react";
import { globalStyles } from "./lib/style";
import { Router } from "./Router";

export const App: FC = () => {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <>
      {/* <Helmet title="コミュニティ" /> */}
      <Router />
    </>
  );
};
