import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
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
    const[Img, setImg]= useState("");

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
        setImg(response.data.Img);
    }

    return (

        <div className="Booklist">
            <div className="wrapper">
                <img className="imgdetail"
                    src={Img}
                    height={200}
                />
                <h2 className="titledetail">{name}</h2>
                <div className="row">
                    <div className="col-md-2">
                        <h3 className="h3detail">ISBN</h3>
                        <h3 className="h3detail">Author</h3>
                        <h3 className="h3detail">Language</h3>
                        <h3 className="h3detail">Cover</h3>
                        <h3 className="h3detail">Category</h3>
                        <h3 className="h3detail">Page</h3>
                        <h3 className="h3detail">Date</h3>
                        <h3 className="h3detail">Stock</h3>
                        <h3 className="h3detail">Price</h3>
                        <h3 className="h3detail">Description</h3>
                    </div>
                    <div className="col-md-2">
                        <h3 className="h3detail">:</h3>
                        <h3 className="h3detail">:</h3>
                        <h3 className="h3detail">:</h3>
                        <h3 className="h3detail">:</h3>
                        <h3 className="h3detail">:</h3>
                        <h3 className="h3detail">:</h3>
                        <h3 className="h3detail">:</h3>
                        <h3 className="h3detail">:</h3>
                        <h3 className="h3detail">:</h3>
                        <h3 className="h3detail">:</h3>
                    </div>
                    <div className="col-md-8">
                        <h3 className="h3detail">{ISBN}</h3>
                        <h3 className="h3detail">{Author}</h3>
                        <h3 className="h3detail">{Language}</h3>
                        <h3 className="h3detail">{Cover}</h3>
                        <h3 className="h3detail">{Category}</h3>
                        <h3 className="h3detail">{Page}</h3>
                        <h3 className="h3detail">{Date}</h3>
                        <h3 className="h3detail">{Stock}</h3>
                        <h3 className="h3detail">{Price}</h3>
                        <p className="h3detail">{Description}</p>
                    </div>
                </div>
                <Link to={`/`} className="button is-small is-info">Back</Link>
            </div>

        </div>
    )
}


export default BookDetail