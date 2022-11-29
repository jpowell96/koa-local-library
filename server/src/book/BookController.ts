import { InMemoryBookRepository } from './repository/InMemoryBookRepository';
import { IBookRepository, ListBooksRequest } from './repository/IBookRepository';
import Router from "koa-router";

const routerOptions : Router.IRouterOptions = {
    prefix: "/books"
};
const router = new Router(routerOptions);

const bookRepository : IBookRepository = new InMemoryBookRepository();
// Routes will go here
// books.js
router.get('/', async (ctx, next) => {
    const listRequest : ListBooksRequest = {};
    const books = await bookRepository.listBooks(listRequest);
	ctx.body = books;
	next();
});

router.get('/:id', async (ctx, next) => {
    const book = await bookRepository.getBookById({id: Number.parseInt(ctx.params.id)});
	ctx.body = book;
	next();
});


module.exports = router;