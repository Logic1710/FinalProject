import booksDAO from '../dao/book_dao'

export async function findBook(req,res) {
    try {
        let getBook = await booksDAO.findBook()
        console.log(getBook)
        res.send(getBook)
    }catch (e) {
        res.send(e)
    }
}

export async function findAllBooks(req,res) {
    try {
        let getAllBook = await booksDAO.findAllBooks()
        console.log(getAllBook)
        res.send(getAllBook)
    }catch (e) {
        res.send(e)
    }
}

export async function deleteBook(req, res) {
    try {
        let deletebook = await booksDAO.deleteBook(req.query.id)
        console.log(deletebook)
        res.send(deletebook)
    }catch (e) {
        res.send(e)
    }
}

export async function updateBook(req, res) {
    try {
        let updatebook = await booksDAO.updateBook(req.query.id, req.query.uISBN, req.query.uname, req.query.uauthor, req.query.ulanguage, req.query.ucover, req.query.ucategory, req.query.ustock, req.query.uprice, req.query.ustatus, req.query.udescription, req.query.upage, req.query.udate)
        console.log(updatebook)
        res.send(updatebook)
    }catch (e) {
        res.send(e)
    }
}

export async function createBook(req, res) {
    try {
        let createbook = await booksDAO.createBook(req.query.ISBN, req.query.name, req.query.author, req.query.language, req.query.cover, req.query.category, req.query.stock, req.query.price, req.query.status, req.query.description, req.query.page, req.query.date)
        console.log(createbook)
        res.send(createbook)
    }catch (e) {
        res.send(e)
    }
}
