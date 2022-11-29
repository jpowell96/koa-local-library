import { Book, BookProps } from '../domain/Book';
import { GetBookByIdRequest, IBookRepository, ListBooksRequest } from './IBookRepository';
export class InMemoryBookRepository implements IBookRepository {
     bookProps : BookProps[] = [
        { id: 101, title: 'Fight Club', authors: ['Chuck Palahniuk'] },
        { id: 102, title: 'Sharp Objects', authors: ['Gillian Flynn'] },
        { id: 103, title: 'Frankenstein', authors: ['Mary Shelley'] },
        { id: 101, title: 'Into The Wild', authors: ['John Krakauer'] }
    ];

    listBooks(request: ListBooksRequest) : Promise<Book[]> {
        const asBooks : Book[] = this.bookProps.map(props => new Book(props));

        return Promise.resolve(asBooks);
    }

    getBookById(request: GetBookByIdRequest) : Promise<Book> {
        const props = this.bookProps.find(book => request.id === book.id);
        if (props) {
            const book : Book = new Book(props);
            return Promise.resolve(
                book
                );
        } else {
           return Promise.reject();
        }

    }
}