import { useCallback } from "react";
import type { Store } from "../../../lib/store";
import { setState, useStore } from "../../../lib/store";
import { darkTheme, lightTheme } from "../../../style";

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

  return theme === "light" ? lightTheme : darkTheme;
};
