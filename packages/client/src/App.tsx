import { FC, useEffect } from "react";
import { useThemeClass } from "./features/app/modules/themeHooks";
import { enableIcon } from "./lib/icon";
import { globalStyles } from "./lib/style";
import { Router } from "./Router";

enableIcon();

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
