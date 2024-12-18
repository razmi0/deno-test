import html from "./App.tsx";
// import { ensureDir } from "https://deno.land/std@0.208.0/fs/mod.ts";

// Deno.writeFileSync(, new TextEncoder().encode(html));

const build = async () => {
  await Deno.writeTextFile("public/index.html", html);
};

for await (const event of Deno.watchFs("src/templates")) {
  console.log("Changes detected");
  if (event.kind === "modify") {
    await build();
  }
}
