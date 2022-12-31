import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const NotFound = () => {
  return (
    <div className="wrapper h-100">
            <h1 className="title">Willkommen in der Bibliothek</h1>
            <div className="text-center">
                <h1 className="fw-bold h1">404 Notfound</h1>
                <Link to={`/`} className="button is-large is-info">Back to homepage</Link>
            </div>
    </div>
  )
}

export default NotFound;
