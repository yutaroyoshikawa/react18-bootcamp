import { Head, Html, Main, NextScript } from "next/document";
import { getCssText } from "../style";

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
