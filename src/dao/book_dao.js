import connectDB from "../../db_connect";
import Book from '../model/book'
async function findAllBooks(){
    let books
    await connectDB(async(db)=>{
        try {
            books = await db.collection('books').find({}).toArray()
            if (!books)
                return null
        }catch (e) {
            console.log(e)
        }
    })
    console.log("Find books")
    books = Book.getAllBooks(books)
    return (books)
}

async function createBook(title, author){
    let books
    await connectDB(async(db)=> {
        try {
            books = await db.collection('books').insertOne({
                title:title,
                author:author
            })
        } catch (e) {
            console.log(e)
        }
    })
    console.log("Create books")
    return (books)
}

async function deleteBook(title) {
    let books
    await connectDB(async (db) => {
        try {
            books = await db.collection('books').deleteOne({title : title})
        } catch (e) {
            console.log(e)
        }
    })
    console.log("Delete books")
    return (books)
}

async function updateBook(title, utitle, uauthor) {
    let books
    await connectDB(async (db) => {
        try {
            books = await db.collection('books').updateOne({title: title}, {
                $set: {
                    title: utitle,
                    author: uauthor
                }
            })
        } catch (e) {
            console.log(e)
        }
        console.log("Update books")
        return (books)
    })
}

export default {
    findAllBooks, deleteBook, updateBook, createBook
}