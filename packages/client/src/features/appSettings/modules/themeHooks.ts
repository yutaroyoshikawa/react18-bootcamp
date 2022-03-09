import { useCallback, useEffect } from "react";
import type { Store } from "../../../lib/store";
import { setState, useStore } from "../../../lib/store";
import { darkGlobalStyles, lightGlobalStyles } from "../../../style";

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

export const useToggleGlobalStyleTheme = () => {
  const [theme] = useTheme();

  useEffect(() => {
    theme === "light" ? lightGlobalStyles() : darkGlobalStyles();
  }, [theme]);
};
