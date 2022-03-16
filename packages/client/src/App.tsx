import { FC } from "react";
import { setAppElement } from "react-modal";
import { useThemeClass } from "./features/app/modules/themeHooks";
import { enableIcon } from "./lib/icon";
import { globalStyles } from "./lib/style";
import { Router } from "./Router";

enableIcon();
globalStyles();
setAppElement("#root");

export const App: FC = () => {
  useThemeClass();

  return (
    <>
      {/* <Helmet title="コミュニティ" /> */}
      <Router />
    </>
  );
};
