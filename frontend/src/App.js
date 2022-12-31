import BookList from "./components/BookList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AddBook } from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import BookListReader from "./components/BookListReader";
import BookDetail from "./components/BookDetail";
import BookDetailAdmin from "./components/BookDetailAdmin";
import Login from "./components/Login";
import './App.css';
import {Fragment} from "react";
 import ProtectedRoute from "./components/ProtectedRoute";
function App() {

  return (
    <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route path="/admin" element={<BookList />}/>
            </Route>
            <Route path="/add" element={<AddBook />}/>
            <Route path="/update/:id" element={<UpdateBook/>}/>
            <Route path="/" element={<BookListReader/>}/>
            <Route path="/BookDetail/:id" element={<BookDetail/>}/>
            <Route path="/BookDetailAdmin/:id" element={<ProtectedRoute />}>
              <Route path="/BookDetailAdmin/:id" element={<BookDetailAdmin/>}/>
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
