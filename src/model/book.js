export default class Book {
    constructor(book){
        this.id = book.id
        this.title = book.title
        this.category = book.category
        this.author = book.author
        this.price = book.price
    }

    static getSingularBook(rows) {
        return new Book(rows[0])
    }
    static getAllBooks(rows) {
        return rows.map(r=> new Book(r))
    }
}