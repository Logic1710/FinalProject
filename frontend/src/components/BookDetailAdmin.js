import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';


const BookDetailAdmin = () => {

    const {id} = useParams();

    useEffect(() => {
        getBookById();
    }, []);

    const navigate = useNavigate();
    const onDeleteClick = (id) => {
        const answer = window.confirm("Are you sure ?");
        if (answer) {
            try {
                axios.delete(`http://localhost:5000/books/${id}`);
                navigate("/admin");
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    };

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
                     alt="Cover Image"
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
                <Link to={`/admin`} className="button is-info is-small mr-4">Back</Link>
                <Link to={`/update/${id}`} className="button is-info is-small mr-4">Edit</Link>
                <button className="button is-danger is-small" onClick={()=> {
                    onDeleteClick(id);
                }}>Delete</button>
            </div>

        </div>
    )
}


export default BookDetailAdmin