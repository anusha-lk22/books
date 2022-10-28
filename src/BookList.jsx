import React from 'react';
import './App.css'
function BookList() {
var booklist = ['book1', 'book2', 'book3'];
return(
    booklist = booklist.map(book => 
<ul key={book}>
    <li>{book}</li>
</ul>
    )
);
};

export default BookList;
