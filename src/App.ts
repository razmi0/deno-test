import term from "@/term.ts";

type ContextExtension = {
    path: string;
    target: string;
    res: Response;
};
type RequestContext = Request & ContextExtension & Record<string, string>;
type Handler = (req: RequestContext) => Response;
type RouteHandler = (targetPath: string, handler: Handler) => App;

type Methods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

class Routes {
    constructor(
        protected req: Request,
        /**
         * Default response
         * ```ts
         * new Response("Not found", {
         *    status: 404,
         * });
         * ```
         */
        protected res = new Response("Not found", {
            status: 404,
            headers: {
                "Content-Type": "text/plain",
            },
        }),
        protected routes: Map<
            `${Methods}-${string}`,
            { method: Methods; handler: Handler; targetPath: string }
        > = new Map(),
        protected verbose = false
    ) {}

    protected addRoute = (method: Methods, targetPath: string, handler: Handler): this => {
        this.routes.set(`${method}-${targetPath}`, { method, handler, targetPath });
        this.verbose && console.log(term("green", ` - Added ${method.padEnd(5)} ${targetPath}`));
        return this;
    };
}

export default class App extends Routes {
    constructor(req: Request) {
        super(req);
    }
    public get = ((targetPath, handler) => this.addRoute("GET", targetPath, handler)) as RouteHandler;
    public post = ((targetPath, handler) => this.addRoute("POST", targetPath, handler)) as RouteHandler;
    public put = ((targetPath, handler) => this.addRoute("PUT", targetPath, handler)) as RouteHandler;
    public delete = ((targetPath, handler) => this.addRoute("DELETE", targetPath, handler)) as RouteHandler;
    public patch = ((targetPath, handler) => this.addRoute("PATCH", targetPath, handler)) as RouteHandler;

    public run(): Response {
        this.verbose && console.log(` - ${this.routes.size} routes`);
        for (const [_key, { method, handler, targetPath }] of this.routes) {
            const pattern = new URLPattern({ pathname: targetPath }); // { pathname: "/books/:user" }
            const match = pattern.exec(this.req.url);

            if (match && this.req.method === method) {
                this.verbose &&
                    console.log(term("blue", ` - Matched ${this.req.method} ${targetPath} => ${match.pathname.input}`));

                const context = {
                    ...this.req,
                    ...match.pathname.groups,
                    path: match.pathname.input,
                    target: targetPath,
                    res: this.res,
                } as RequestContext;

                return handler(context);
            }
        }

        this.verbose && console.log(term("red", `${this.req.method.padEnd(5)} ${this.req.url} => Not found`));

        return this.res;
    }

    // --
    // --
    // -- HELPERS
    // --
    // --

    setVerbose(debug: boolean): this {
        this.verbose = debug;
        return this;
    }

    jsonResponse(): this {
        this.res = new Response(JSON.stringify({ message: "404 Note found" }), {
            status: 404,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return this;
    }

    htmlResponse(): this {
        this.res = new Response("<h1>404 Not found</h1>", {
            status: 404,
            headers: {
                "Content-Type": "text/html",
            },
        });
        return this;
    }
}
