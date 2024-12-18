/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts";
import Layout from "./components/Layout.tsx";

const App = await renderToString(
  <>
    <Layout title="Hello Jsx">
      <body>
        <h1>Hello Moto</h1>
      </body>
    </Layout>
  </>,
);

export default App;
