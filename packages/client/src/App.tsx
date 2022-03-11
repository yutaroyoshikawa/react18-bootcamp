import { FC, useEffect } from "react";
import { useThemeClass } from "./features/app/modules/themeHooks";
import { globalStyles } from "./lib/style";
import { Router } from "./Router";

export const App: FC = () => {
  useThemeClass();

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
