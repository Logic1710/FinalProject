import connectDB from "../../db_connect";
import Book from '../model/book'

async function findBook(name){
    let books
    await connectDB(async(db)=>{
        try {
            books = await db.collection('books').find({name:'/'+name+'/'})
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

async function createBook(ISBN, name, author, language, cover, category, stock, price, status, description, page, date){
    let books
    await connectDB(async(db)=> {
        try {
            books = await db.collection('books').insertOne({
                ISBN:ISBN,
                name:name,
                author:author,
                language:language,
                cover:cover,
                category:category,
                stock:stock,
                price:price,
                status:status,
                description:description,
                page:page,
                date:date
            })
        } catch (e) {
            console.log(e)
        }
    })
    console.log("Create books")
    return (books)
}

// ganti pake id
async function deleteBook(id) {
    let books
    await connectDB(async (db) => {
        try {
            books = await db.collection('books').deleteOne({id : id})
        } catch (e) {
            console.log(e)
        }
    })
    console.log("Delete books")
    return (books)
}

//ganti pake id
async function updateBook(id , uISBN, uname, uauthor, ulanguage, ucover, ucategory, ustock, uprice, ustatus, udescription, upage, udate) {
    let books
    await connectDB(async (db) => {
        try {
            books = await db.collection('books').updateOne({id: id}, {
                $set: {
                    ISBN:uISBN,
                    name:uname,
                    author:uauthor,
                    language:ulanguage,
                    cover:ucover,
                    category:ucategory,
                    stock:ustock,
                    price:uprice,
                    status:ustatus,
                    description:udescription,
                    page:upage,
                    date:udate
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
    findBook, findAllBooks, deleteBook, updateBook, createBook
}