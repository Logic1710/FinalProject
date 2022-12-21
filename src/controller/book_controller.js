import booksDAO from '../daos/books_dao.js'
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
        let deletebook = await booksDAO.deleteBook(req.query.title)
        console.log(deletebook)
        res.send(deletebook)
    }catch (e) {
        res.send(e)
    }
}

export async function updateBook(req, res) {
    try {
        let updatebook = await booksDAO.updateBook(req.query.title, req.query.utitle, req.query.author)
        console.log(updatebook)
        res.send(updatebook)
    }catch (e) {
        res.send(e)
    }
}

export async function createBook(req, res) {
    try {
        let createbook = await booksDAO.createBook(req.query.title, req.query.author)
        console.log(createbook)
        res.send(createbook)
    }catch (e) {
        res.send(e)
    }
}
