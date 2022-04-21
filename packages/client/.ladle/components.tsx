import type { GlobalProvider } from "@ladle/react";
import { MemoryRouter } from "react-router-dom";
import { enableIcon } from "../src/lib/icon";
import { globalStyles } from "../src/lib/style";

globalStyles();
enableIcon();

export const Provider: GlobalProvider = ({ children }) => (
  <>
    <MemoryRouter>{children}</MemoryRouter>
  </>
);
