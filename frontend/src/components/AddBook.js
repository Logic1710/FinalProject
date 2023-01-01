import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

export const AddBook = () => {
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

    const saveBook = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/books', {
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
        <div className="column is-full mt-5 mb-5">
            <h1 className="title">Add New Book</h1>
            <form onSubmit={saveBook}>
                <div className="field">
                    <label className="label">ISBN</label>
                    <div className="control">
                        <input required type="number" className="input" placeholder="ISBN" value={ISBN} onChange={(e) => setISBN(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input required type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Author</label>
                    <div className="control">
                        <input required type="text" className="input" placeholder="Author" value={Author} onChange={(e) => setAuthor(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Language</label>
                    <div className="control">
                        <input required type="text" className="input" placeholder="Language" value={Language} onChange={(e) => setLanguage(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Cover</label>
                    <div className="control">
                        <input required type="text" className="input" placeholder="Cover" value={Cover} onChange={(e) => setCover(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Category</label>
                    <div className="control">
                        <input required type="text" className="input" placeholder="Category" value={Category} onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Stock</label>
                    <div className="control">
                        <input required type="number" className="input" placeholder="Stock" value={Stock} onChange={(e) => setStock(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input required type="number" className="input" placeholder="Price" value={Price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Status</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select required value={Status} onChange={(e) => setStatus(e.target.value)}>
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
                        <input required type="text" className="input" placeholder="Description" value={Description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Page</label>
                    <div className="control">
                        <input required type="number" className="input" placeholder="Page" value={Page} onChange={(e) => setPage(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                        <input required type="date" className="input" placeholder="Date" value={Date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Image Link</label>
                    <div className="control">
                        <input required type="text" className="input" placeholder="Insert Link" value={Img} onChange={(e) => setImg(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <Link to={`/admin`} className="button is-info is-link mr-3">Back</Link>
                        <button type='submit' className="button is-success">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddBook;
