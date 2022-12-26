import BookList from "./components/BookList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AddBook } from "./components/AddBook";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />}/>
          <Route path="/add" element={<AddBook />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
