import koa from "koa";
import koaBody from "koa-body";
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';

dotenv.config();


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