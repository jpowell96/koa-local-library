import { Book } from '../domain/Book';
import { GetBookByIdRequest, IBookRepository, ListBooksRequest } from './IBookRepository';
import {Client, ClientBase} from "pg";
export class PostgresBookRepository implements IBookRepository {
    private readonly datasource : any;

    constructor(datasource: ClientBase) {
        this.datasource = datasource;
    }


    listBooks(request: ListBooksRequest) : Promise<Book[]> {
        return this.datasource.query('')
    }


    getBookById(request: GetBookByIdRequest) : Promise<Book> {
        return Promise.reject();
    }

}