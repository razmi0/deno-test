import App from "@/App.ts";

const json = (data: Record<string, string>): string => {
    return JSON.stringify(data);
};

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
        // #
        // #
        // #
        // #
        // #
        return (
            new App(req)
                .setVerbose(true)
                .htmlResponse()
                //
                .get("/", ({ _user, _res }) => {
                    return new Response(html, {
                        status: 200,
                        headers: {
                            "Content-Type": "text/html",
                        },
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
                })
                .run()
        );

        // #
        // #
        // #
        // #
        // #
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
