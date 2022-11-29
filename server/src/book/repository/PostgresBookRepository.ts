import { Book } from '../domain/Book';
import { GetBookByIdRequest, IBookRepository, ListBooksRequest } from './IBookRepository';
import {Client, ClientBase} from "pg";

// TODO: Make this a singleton where we only connect once. For now, pull in creds in the class.
// reference point -  https://www.jonmellman.com/posts/singleton-promises
export class PostgresBookRepository implements IBookRepository {
    private readonly postgresClient : ClientBase;

    constructor(postgresClient: ClientBase) {
        this.postgresClient = postgresClient;
    }


   async listBooks(request: ListBooksRequest) : Promise<Book[]> {
       await this.postgresClient.connect();
       await this.postgresClient.query("SELECT * FROM ")

       return Promise.reject();
    }


    async getBookById(request: GetBookByIdRequest) : Promise<Book> {
        return Promise.reject();
    }

}