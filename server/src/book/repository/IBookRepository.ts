import { Book, BookProps } from '../domain/Book';

export interface ListBooksRequest {
    before?: String,
    after?: String,
    limit?: Number
}

export interface GetBookByIdRequest {
    id: Number
}

export interface IBookRepository {
    listBooks : (request: ListBooksRequest) => Promise<Book[]>
    getBookById : (request: GetBookByIdRequest) => Promise<Book>
}

