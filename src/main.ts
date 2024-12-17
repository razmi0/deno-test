import App from "@/App.ts";
import term from "@/term.ts";

const json = (data: Record<string, string>): string => {
    return JSON.stringify(data);
};

// const app = new App();

// app.get("/books/:user", ({ user, path }) => {
//     console.log(term("blue", `GET ${path}`));
//     return new Response(json({ user }), {
//         status: 200,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
// });

// Deno.serve({ port: 8080, hostname: "127.0.0.1" }, app.run);
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
`;

export default {
    fetch(req: Request) {
        const app = new App(req);

        app.get("/books/:user", (context) => {
            const { user, path } = context;
            console.log(term("blue", `GET ${path} ${user} ${JSON.stringify(context)}`));
            return new Response(json({ user }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        });

        return app.run();
    },
};

// return new Response(html, {
//     status: 200,
//     headers: {
//         "content-type": "text/html",
//     },
// });
// (req: Request) => Response

// // note :
// // - des demain : ok
// // - convention de coaching a la date du jour // bon pour accord demarrage 18 + paraphage toute page .
// // - debut mercredi
// // toute les modalités
// // - CV, attestation pole emploi, carte vitale, passeport
// // mercredi aprés-midi
// // creation de drive , on verra.
// //
