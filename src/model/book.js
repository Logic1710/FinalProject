export default class Book {
    constructor(book){
        this.id = book.id
        this.ISBN = book.ISBN
        this.name = book.name
        this.author = book.author
        this.language = book.language
        this.cover = book.cover
        this.category = book.category
        this.stock = book.stock
        this.price = book.price
        this.status = book.status
        this.description = book.description
        this.page = book.page
        this.date = book.date
    }
    static getAllBooks(rows) {
        return rows.map(r=> new Book(r))
    }
}