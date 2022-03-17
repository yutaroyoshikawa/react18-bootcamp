import { MemoryRouter } from "react-router-dom";
import { enableIcon } from "../src/lib/icon";
import { globalStyles } from "../src/lib/style";

globalStyles();
enableIcon();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
];
