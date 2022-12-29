import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
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

    const navigate = useNavigate();
    const onDeleteClick = (id) => {
        try{
        axios.delete(`http://localhost:5000/books/${id}`);
        navigate("/admin");
        }catch(error){
            console.log(error);
        }
    };

    const [searchBook, setSearchBook] = useState("");

  return (
    <div className="Booklist">
        <div className="wrapper">
            <h1 className="title">Willkommen in der Bibliothek</h1>
            <Link to={`/add`} className="button is-info is-small mb-4">Add New Book</Link>
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
                            <h3 className="mb-2">Price : IDR {book.Price}</h3>
                            <Link to={`/update/${book._id}`} className="button is-info is-small">Edit</Link>
                            <button className="button is-danger is-small ml-2" onClick={()=> {
                                onDeleteClick(book._id);
                            }}>Delete</button>
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
