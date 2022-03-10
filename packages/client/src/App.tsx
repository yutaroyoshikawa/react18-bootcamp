import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useThemeClass } from "../src/features/appSettings/modules/themeHooks";
import { globalStyles } from "../src/style";
import { routes } from "./router";

export const App: FC = () => {
  const themeClass = useThemeClass();

  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <div className={themeClass}>
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </div>
  );
};
