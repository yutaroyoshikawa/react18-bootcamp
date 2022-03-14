import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleXmark,
  faMoon,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export type IconName = "moon" | "sun" | "search" | "circleXMark";

const enabledIcons = [faMoon, faSun, faSearch, faCircleXmark];

export const enableIcon = () => {
  library.add(...enabledIcons);
};
