import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//
// NOT YET COMPLETED
//.
const BookDetail = (props) => {
    const book = props.book;

    return (
        <div className="columns">
            <div className="column is-half">
                <img
                    src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
                    alt='Books'
                    height={200}
                />
                <Link to={`/BookDetail/${book._id}`}>{book.name}</Link>
                <h3>{book.Author}</h3>
                <h3>{book.Language}</h3>
                <h3>{book.Cover}</h3>
                <h3>{book.Category}</h3>
                <h3>{book.Page}</h3>
                <h3>{book.Date}</h3>
                <h3>{book.Stock}</h3>
                <h3>{book.Price}</h3>
                <p>{book.Description}</p>
                <br>
                    <Link to={`/readerhome`}>Back</Link>
                </br>
            </div>
        </div>
    )
}


export default BookDetail