import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";

const enabledIcons = [faMoon, faSun, faSearch];

export const enableIcon = () => {
  library.add(...enabledIcons);
};
