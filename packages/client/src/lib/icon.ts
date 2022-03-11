import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const enabledIcons = [faMoon, faSun];

export const enableIcon = () => {
  library.add(...enabledIcons);
};
