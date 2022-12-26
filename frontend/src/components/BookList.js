import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
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
        axios
            .delete(`http://localhost:5000/books/${id}`)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log('Error nya di BookList_deleteClick');
            });
    };

  return (
    <div className="columns">
        <div className="column is-half">
            <table className="table is-striped is-fullwidth mt-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>ISBN</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Language</th>
                        <th>Cover</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Page</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                        </thead>
                        <tbody>
                    {books.map((book, index) => (
                        <tr key={book._id}>
                        <td>{index + 1}</td>
                        <td>{book.ISBN}</td>
                        <td>{book.name}</td>
                        <td>{book.Author}</td>
                        <td>{book.Language}</td>
                        <td>{book.Cover}</td>
                        <td>{book.Category}</td>
                        <td>{book.Stock}</td>
                        <td>{book.Price}</td>
                        <td>{book.Status}</td>
                        <td>{book.Description}</td>
                        <td>{book.Page}</td>
                        <td>{book.Date}</td>
                        <td>
                            {/*<button className="button is-info is-small" >Edit</button>*/}
                            <Link to={`/UpdateBook/${book._id}`} className="button is-info is-small">Edit</Link>
                            <button className="button is-danger is-small" onClick={()=> {
                                onDeleteClick(book._id);
                            }}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default BookList
