import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import '../App.css';


const BookListReader = () => {
    const [books, setBook] = useState([]);
    useEffect(() =>{
        getBooks();
    }, [])

    const getBooks = async () =>{
        const response = await axios.get('http://localhost:5000/books')
        setBook(response.data)
    }
    return (
        <div className="Booklist">
            <div className="wrapper">
                <h1 className="title">Wilkommen in der Bibliothek</h1>
                    {books.map((book, index) => (
                    <Link to={`./BookDetail/${book._id}`}>
                        <div className='row mb-5' key={book._id}>
                            <div className='col-md-3'>
                                <img src={book.Img} alt='cover'/>
                            </div>
                            <div className='col-md-9'>
                                <h2>{book.name}</h2>
                                <h3>Author   : {book.Author}</h3>
                                <h3>Release-Date : {book.Date}</h3>
                                <h3>Price : IDR {book.Price}</h3>
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
export default BookListReader



