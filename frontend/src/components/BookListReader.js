import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
// import BookDetail from "./BookDetail";

const BookListReader = () => {
    const [books, setBook] = useState([]);
    useEffect(() =>{
        getBooks();
    }, [])

    const getBooks = async () =>{
        const response = await axios.get('http://localhost:5000/books')
        setBook(response.data)
    }

    // const navigate = useNavigate();

    return (
        <div className="columns">
            <div className="column is-half">
                <table className="table is-striped is-fullwidth mt-5">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book, index) => (
                        <tr key={book._id}>
                            <td>{index + 1}</td>
                            <Link to={`./BookDetail/${book._id}`}>{book.name}</Link>
                            <td>{book.Author}</td>
                            <td>{book.Category}</td>
                            <td>{book.Description}</td>
                            <td>{book.Stock}</td>
                            <td>{book.Price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BookListReader



