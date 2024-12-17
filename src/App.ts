type ContextExtension = {
    path: string;
    groups: Record<string, string>;
};
type RequestContext = Request & ContextExtension & Record<string, string>;
type Handler = (req: RequestContext) => Response;

export default class App {
    constructor(public req: Request, public routes: Map<string, { method: string; handler: Handler }> = new Map()) {}

    public get(path: string, handler: Handler): void {
        this.routes.set(path, { method: "GET", handler: handler });
    }

    public run(): Response {
        console.log("run");
        for (const [path, { method, handler }] of this.routes) {
            const pattern = new URLPattern({ pathname: path }); // { pathname: "/books/:user" }
            const match = pattern.exec(new URL(this.req.url).pathname);
            console.log("compared : ", path, " AND ", new URL(this.req.url).pathname, " RESULTING IN ", match);
            if (match && this.req.method === method) {
                const pattern = new URLPattern({ pathname: path }); // { pathname: "/books/:user" }
                const match = pattern.exec(new URL(this.req.url).pathname);

                const context = {
                    ...this.req,
                    path: path,
                    groups: match?.pathname.groups ?? {},
                } as RequestContext;

                return handler(context);
            }
        }

        return new Response("Not found", {
            status: 404,
        });
    }
}
