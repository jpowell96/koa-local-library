import { Book } from '../domain/Book';
import { GetBookByIdRequest, IBookRepository, ListBooksRequest } from './IBookRepository';
export class InMemoryBookRepository implements IBookRepository {
     books : Book[] = [
        { id: 101, title: 'Fight Club', authors: ['Chuck Palahniuk'] },
        { id: 102, title: 'Sharp Objects', authors: ['Gillian Flynn'] },
        { id: 103, title: 'Frankenstein', authors: ['Mary Shelley'] },
        { id: 101, title: 'Into The Wild', authors: ['John Krakauer'] }
    ];

    listBooks(request: ListBooksRequest) : Promise<Book[]> {


        return Promise.resolve(this.books);
    }

    getBookById(request: GetBookByIdRequest) : Promise<Book> {
        const book = this.books.find(book => request.id === book.id);
        if (book) {
            return Promise.resolve(
                book
                );
        } else {
           return Promise.reject();
        }

    }
}