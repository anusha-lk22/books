import React from 'react';
import './App.css';
import Home from'./Home';
import BookList from'./BookList';
import { Routes, Route, Link } from 'react-router-dom';
import Book1 from './Book1';
import Book2 from './Book2';
import Book3 from './Book3';
import Book from './Book';
import BooksLayout from './BooksLayout';
import OtherLayout from './OtherLayout';
import Contact from './Contact';
import About from './About';
function App() {
return(
  <div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/books" element={<BooksLayout />}>
  <Route index element={<BookList />} />
  <Route path="book1" element={<Book1 />} />
  <Route path="book2" element={<Book2 />} />
  <Route path="book3" element={<Book3 />} />
  <Route path=":id" element={<Book />} />
  <Route path=":id" element={<Book />} />
    </Route>
  <Route element={<OtherLayout />} >
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  
  </Route>
  </Routes>
  
</div>

  
);
};
export default App;
