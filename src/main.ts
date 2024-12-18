import { serveDir } from "@std/file-server";
import App from "./App.ts";

const json = (data: Record<string, string>): string => {
  return JSON.stringify(data);
};

export default {
  fetch(req: Request) {
    // # --
    // # --
    // # --
    // # --
    if (req.url.match(/\.(html|css|js|jpg|png|svg)$/)) {
      return serveDir(req, {
        fsRoot: "public",
      });
    }

    // # --

    const app = new App(req)
      // # --
      .setVerbose(true)
      .htmlResponse()
      // # --
      .get("/", async ({ _user, _res }) => {
        console.log(" --  Serving index.html");
        return await serveDir(req, {
          fsRoot: "public",
        });
      })
      .post("/books/:user", ({ user, _res }) => {
        return new Response(json({ user }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        });
      })
      .put("/books/:user", ({ user, _res }) => {
        return new Response(json({ user }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        });
      });
    // # --
    // # --
    // # --
    // # --
    return app.run();
  },
};

// // note :
// // - des demain : ok
// // - convention de coaching a la date du jour // bon pour accord demarrage 18 + paraphage toute page .
// // - debut mercredi
// // toute les modalités
// // - CV, attestation pole emploi, carte vitale, passeport
// // mercredi aprés-midi
// // creation de drive , on verra.
// //
