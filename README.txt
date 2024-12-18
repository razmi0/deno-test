// // Deno.KvStorage = { // // get(key: string): Promise<string | null> { // //
return Promise.resolve(localStorage.getItem(key)); // // }, // // set(key:
string, value: string): Promise<void> { // // localStorage // // .setItem(key,
value); // // return Promise.resolve(); // // } // // };

// // Example usage: // // const data = new Uint8Array([1, 32, 67, 120, 19]); //
// const transformations: Transformation[] = ["encodeBase64", "decodeBase64",
"encodeHex", "decodeHex"]; // // const results = transformData(data,
transformations); // // console.log(results);

// // console.log("Importing JSON file...");

// // Importing JSON file:

// // Example usage: // // type T = { default: { version: string } }; // //
const module = await importFile("../version.json", "json").then((version) => {
// // console.log(version as T); // // });

// // console.log(module);

// class CustomRequest { // url: string; // method: string; // headers: Headers;

// path: string; // iterator: IterableIterator<[string, string]>;

// constructor(req: Request) { // this.url = req.url; // this.method =
req.method; // this.headers = req.headers; // this.path = new
URL(req.url).pathname; // this.iterator = this.headers.entries(); // }

// getheaders() { // function* entries() { // yield* this.headers.entries(); //
} // }

// log() { // // console.log(material_chalk.chainedMessage(,
`${this.method} ${this.url}`));

// console.log(`Request: ${this.method} ${this.url}`); // for (const [key,
value] of this.headers.entries()) { // console.log(`${key}: ${value}`); // } //
}

// toArray() { // return [this.url, this.method, this.headers]; // } // }

// function handler(req: Request): Response { // const request = new
CustomRequest(req);

// const html = ` // <!DOCTYPE html> // <html lang="en"> // <head> //
<meta charset="UTF-8"> // <meta http-equiv="X-UA-Compatible" content="IE=edge">
// <meta name="viewport" content="width=device-width, initial-scale=1.0"> //

<title>Deno Deploy</title> // </head> // <body> // <h1>Hello, Deno Deploy!</h1>
// <p>Deployed using Deno Deploy</p>

// <div id="content-wrapper"> // <header> // <nav> // <ul class="nav-menu"> //

<li><a href="#">Home</a></li> // <li><a href="#">About</a></li> //
<li><a href="#">Services</a></li> // <li><a href="#">Contact</a></li> // </ul>
// </nav> // </header>

// <main> // <section id="hero-section"> // <div class="hero-content"> //

<h1>Hello, Deno Deploy!</h1> // <p>Deployed using Deno Deploy</p> // </div> //
<div class="hero-image"> //
<img src="https://via.placeholder.com/300" alt="Placeholder Image"> // </div> //
</section>

// <section id="fun-facts"> // <h2>Some Fun Facts</h2> // <ul> // <li>Deno is
secure by default.</li> // <li>Deno supports TypeScript out of the box.</li> //

<li>Deno loves modules with URLs.</li> // </ul> // </section>

// <section id="request"> // <h2>${request.method} : ${request.path}</h2> //

<ul> // ${request.headers.forEach((value, key) => { // return
`<li>${key}: ${value}</li>`; // })} // </ul> // </section>

// <section id="nested-useless-content"> // <div class="grid"> //

<div class="grid-item"> // <h3>Card 1</h3> // <p>This is a useless card.</p> //
</div> // <div class="grid-item"> // <h3>Card 2</h3> // <p>This is another
useless card.</p> // </div> // <div class="grid-item"> // <h3>Card 3</h3> //
<p>Yet another useless card!</p> // </div> // </div> // </section>

// <section id="testimonials"> // <h2>What People Say</h2> // <blockquote> //

<p>"Deno Deploy is amazing! Also, this page is overwhelming."</p> // <cite>- A
random person</cite> // </blockquote> // <blockquote> // <p>"I didn’t read this,
but it looks complicated."</p> // <cite>- Another person</cite> // </blockquote>
// </section> // </main>

// <footer> // <div class="footer-columns"> // <div class="footer-column"> //

<h3>Links</h3> // <ul> // <li><a href="#">Privacy Policy</a></li> //
<li><a href="#">Terms of Use</a></li> // </ul> // </div> //
<div class="footer-column"> // <h3>Contact</h3> // <p>Email:
contact@deno.deploy</p> // <p>Phone: 123-456-7890</p> // </div> //
<div class="footer-column"> // <h3>Follow Us</h3> // <ul class="social-links">
// <li><a href="#">Twitter</a></li> // <li><a href="#">GitHub</a></li> // </ul>
// </div> // </div> // </footer> // </div>

// <style> // #content-wrapper { font-family: Arial, sans-serif; margin: 20px; }
// header { background: #282c34; padding: 20px; } // .nav-menu { list-style:
none; padding: 0; display: flex; gap: 10px; } // .nav-menu li { display: inline;
} // .nav-menu a { color: #61dafb; text-decoration: none; } // #hero-section {
display: flex; gap: 20px; align-items: center; margin: 20px 0; } //
#hero-section img { max-width: 100%; height: auto; } // #fun-facts ul {
list-style: disc; padding-left: 40px; } // #nested-useless-content .grid {
display: flex; gap: 10px; } // .grid-item { padding: 20px; background: #f0f0f0;
border: 1px solid #ddd; flex: 1; } // #testimonials blockquote { margin: 10px 0;
padding: 10px; background: #f9f9f9; border-left: 5px solid #ccc; } // footer {
background: #282c34; color: #fff; padding: 20px; margin-top: 20px; } //
.footer-columns { display: flex; justify-content: space-between; } //
.footer-column ul { list-style: none; padding: 0; } // .social-links a { color:
#61dafb; text-decoration: none; } // </style>

// </body> // </html> // `;

// const path = new URL(req.url).pathname; // console.log(`Path: ${path}`);

// return new Response(html, { // status: 200, // headers: { // "content-type":
"text/html; charset=UTF-8", // }, // }); // }

// Deno.serve(handler);

// import { serveDir, serveFile } from "jsr:@std/http/file-server"; //
Deno.serve((req: Request) => { // console.log(req.method, req.url);

// const pathname = new URL(req.url).pathname;

// if (pathname === "/index.html") { // return serveFile(req, "/index.html"); //
}

// if (pathname.startsWith("/static")) { // return serveDir(req, { // fsRoot:
"public", // urlRoot: "static", // }); // }

// return new Response("404: Not Found", { // status: 404, // }); // });
