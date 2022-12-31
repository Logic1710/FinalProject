import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

export const UpdateBook = () => {
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

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        getBookById();
    }, []);

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

    const updateBook = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/books/${id}`, {
                ISBN, 
                name, 
                Author, 
                Language, 
                Cover, 
                Category, 
                Stock, 
                Price, 
                Status, 
                Description, 
                Page, 
                Date,
                Img
            });
            navigate("/admin")
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className="columns">
        <div className="column is-half mt-5 mb-5">
            <h1 className="title">Update Book</h1>
            <form onSubmit={updateBook}>
                <div className="field">
                    <label className="label">ISBN</label>
                    <div className="control">
                        <input type="number" className="input" placeholder="ISBN" value={ISBN} onChange={(e) => setISBN(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Author</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Author" value={Author} onChange={(e) => setAuthor(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Language</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Language" value={Language} onChange={(e) => setLanguage(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Cover</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Cover" value={Cover} onChange={(e) => setCover(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Category</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Category" value={Category} onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Stock</label>
                    <div className="control">
                        <input type="number" className="input" placeholder="Stock" value={Stock} onChange={(e) => setStock(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input type="number" className="input" placeholder="Price" value={Price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Status</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select value={Status} onChange={(e) => setStatus(e.target.value)}>
                                <option>Select...</option>
                                <option value="True">True</option>
                                <option value="False">False</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Description" value={Description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Page</label>
                    <div className="control">
                        <input type="number" className="input" placeholder="Page" value={Page} onChange={(e) => setPage(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                        <input type="date" className="input" placeholder="Date" value={Date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Image Link</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Image Link" value={Img} onChange={(e) => setImg(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <Link to={`/admin`} className="button is-info is-link mr-3">Cancel</Link>
                        <button type='submit' className="button is-success">Update</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
};

export default UpdateBook;
