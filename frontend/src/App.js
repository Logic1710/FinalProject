import BookList from "./components/BookList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AddBook } from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import BookListReader from "./components/BookListReader";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />}/>
          <Route path="/add" element={<AddBook />}/>
          <Route path="/update" element={<UpdateBook/>}/>
          <Route path="/readerhome" element={<BookListReader/>}/>
          <Route path="/BookDetail" element={<BookDetail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
