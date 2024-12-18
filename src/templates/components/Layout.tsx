/** @jsx h */
import { h } from "https://deno.land/x/jsx/mod.ts";

export default function Layout(
  { children, title = "Document" }: { children: JSX.Element; title: string },
) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="module" src="index.js"></script>
        <link rel="stylesheet" href="index.css" />
        <title>{title}</title>
      </head>
      {children}
    </html>
  );
}

// However, the components may be asynchronous
// async function File({ path }: { path: string }) {
//     return <p>{await Deno.readTextFile(path)}</p>;
// }
