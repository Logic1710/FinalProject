import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const BookDetail = () => {

    const {id} = useParams();

    useEffect(() => {
        getBookById();
    }, []);

    const[ISBN, setISBN] = useState("");
    const[name, setName] = useState("");
    const[Author, setAuthor] = useState("");
    const[Language, setLanguage] = useState("");
    const[Cover, setCover] = useState("");
    const[Category, setCategory] = useState("");
    const[Stock, setStock] = useState("");
    const[Price, setPrice] = useState("");
    const[Status, setStatus] = useState("");
    const[Description, setDescription] = useState("");
    const[Page, setPage] = useState("");
    const[Date, setDate] = useState("");

    const getBookById = async () => {
        const response = await axios.get(`http://localhost:5000/books/${id}`)
        setISBN(response.data.ISBN);
        setName(response.data.name);
        setAuthor(response.data.Author);
        setLanguage(response.data.Language);
        setCover(response.data.Cover);
        setCategory(response.data.Category);
        setStock(response.data.Stock);
        setPrice(response.data.Price);
        setStatus(response.data.Status);
        setDescription(response.data.Description);
        setPage(response.data.Page);
        setDate(response.data.Date);
    }

    return (
        <div className="columns">
            <div className="column is-half">
                <img
                    src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
                    alt='Books'
                    height={200}
                />
                <h2>{name}</h2>
                <h3>{ISBN}</h3>
                <h3>{Author}</h3>
                <h3>{Language}</h3>
                <h3>{Cover}</h3>
                <h3>{Category}</h3>
                <h3>{Page}</h3>
                <h3>{Date}</h3>
                <h3>{Stock}</h3>
                <h3>{Price}</h3>
                <p>{Description}</p>
                <Link to={`/`}>Back</Link>
            </div>
        </div>
    )
}


export default BookDetail