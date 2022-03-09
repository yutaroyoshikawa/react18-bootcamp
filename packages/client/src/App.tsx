import { FC, useEffect, useState } from "react";
import { useThemeClass } from "../src/features/appSettings/modules/themeHooks";
import { globalStyles } from "../src/style";

export const App: FC = () => {
  const [count, setCount] = useState(0);
  const themeClass = useThemeClass();

  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <div className={themeClass}>
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};
