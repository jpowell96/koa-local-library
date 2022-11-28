export interface BookProps {
    title: String,
    authors: String[],
    id: Number
}

export class Book {
    private readonly title : String;
    private readonly authors: String[];
    private readonly id: Number;

    constructor(bookProps: BookProps) {
        this.title = bookProps.title;
        this.authors = bookProps.authors;
        this.id = bookProps.id;
    }

}