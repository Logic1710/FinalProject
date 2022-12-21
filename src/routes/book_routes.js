import * as BookController from "../controller/book_controller"
export default function (app){
    app.route('/book')
        .get(BookController.findAllBooks)

    app.route('/book')
        .get(BookController.findBook)

    app.route('/book/deleteBooks')
        .get(BookController.deleteBook)

    app.route('/book/createBooks')
        .get(BookController.createBook)

    app.route('/book/updateBooks')
        .get(BookController.updateBook)
}