import { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import { globalStyles } from "../src/style";
import { useThemeClass } from "./features/app/modules/themeHooks";
import { Router } from "./Router";

export const App: FC = () => {
  const themeClass = useThemeClass();

  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <>
      <Helmet>
        <title>コミュニティ</title>
      </Helmet>
      <div className={themeClass}>
        <Router />
      </div>
    </>
  );
};
