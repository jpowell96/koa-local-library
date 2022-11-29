export interface BookProps {
    title: String,
    authors: String[],
    id: Number
}

export class Book {
    private readonly _title : String;
    private readonly _authors: String[];
    private readonly _id: Number;

    constructor(bookProps: BookProps) {
        this._title = bookProps.title;
        this._authors = bookProps.authors;
        this._id = bookProps.id;
    }

    get title() : String {
        return this._title;
    }

    get authors() : String[] {
        return this._authors;
    }

    get id() : Number {
        return this._id;
    }

}