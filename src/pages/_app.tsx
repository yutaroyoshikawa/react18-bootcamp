import type { AppProps } from "next/app";
import { useTheme } from "../features/appSettings/modules/themeHooks";
import { darkTheme, lightTheme } from "../style";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme] = useTheme();
  // useToggleGlobalStyleTheme();

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
