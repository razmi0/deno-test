import html from "@/components/ssr.tsx";
Deno.writeFileSync("public/index.html", new TextEncoder().encode(html));
