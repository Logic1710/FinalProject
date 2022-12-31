import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import '../App.css';

const BookList = () => {
    const [books, setBook] = useState([]);
    useEffect(() =>{
        getBooks();
    }, [])
    const getBooks = async () =>{
        const response = await axios.get('http://localhost:5000/books')
        setBook(response.data)
    }


    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = "/admin";
    }

    const [searchBook, setSearchBook] = useState("");

  return (
    <div className="Booklist">
        <div className="wrapper">
            <h1 className="title">Willkommen in der Bibliothek</h1>
            <Link to={`/add`} className="button is-info is-small mb-4">Add New Book</Link>
            <button name="logout" className="button is-info is-small mb-4 ml-3" onClick={handleLogout}>Logout</button>
            <br/>
            <input type="text" style={{width: "100%"}} className="search-bar mb-4" onChange={(event) => {setSearchBook(event.target.value)}} placeholder="Search..."/>
            {books.filter((book) => {
                if (searchBook == "") {
                    return book
                } else if (book.name.toLowerCase().includes(searchBook.toLowerCase())){
                    return book
                }
            }).map((book) => (
                <Link to={`/BookDetailAdmin/${book._id}`}>
                    <div className='row mb-5' key={book._id}>
                        <div className='col-md-3'>
                            <img src={book.Img} alt='cover'/>
                        </div>
                        <div className='col-md-9'>
                            <h2>{book.name}</h2>
                            <h3>Author   : {book.Author}</h3>
                            <h3>Release-Date : {book.Date}</h3>
                            <h3>Stock : {book.Stock}</h3>
                            <h3 className="mb-2">Price : IDR {book.Price}</h3>
                        </div>
                    </div>
                    <hr
                        style={{
                            color: '#000000',
                            backgroundColor: '#000000',
                            height: .5,
                            borderColor : '#000000'
                        }}
                    />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default BookList
