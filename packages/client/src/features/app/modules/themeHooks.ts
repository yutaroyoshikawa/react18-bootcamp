import { useCallback, useEffect } from "react";
import type { Store } from "../../../lib/store";
import { setState, useStore } from "../../../lib/store";
import { baseTheme, darkTheme } from "../../../lib/style";

export const useTheme = () => {
  const theme = useStore((store) => store.theme);

  const setTheme = useCallback(
    (state: (prev: Store["theme"]) => Store["theme"]) => {
      setState((prev) => ({
        ...prev,
        theme: state(prev.theme),
      }));
    },
    []
  );

  return [theme, setTheme] as const;
};

export const useThemeClass = () => {
  const [theme] = useTheme();

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.classList.remove(theme === "light" ? darkTheme : baseTheme);
    document.body.classList.add(theme === "light" ? baseTheme : darkTheme);
  }, [theme]);
};
