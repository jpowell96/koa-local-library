import koa from "koa";
import koaBody from "koa-body";

// Create Server Object
const server = new koa();

// Middleware
server.use(koaBody());


// Require routers
let books = require('./book/bookController.ts');

// Use the Router on the sub route /books
// Use the routers

server.use(books.routes());

// Listen on port 3000
const port : String = process.env.port || "3000";
server.listen(port);