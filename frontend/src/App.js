import BookList from "./components/BookList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AddBook } from "./components/AddBook";
import { UpdateBook } from "./components/UpdateBook";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />}/>
          <Route path="/add" element={<AddBook />}/>
          <Route path="/update/:id" element={<UpdateBook />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
