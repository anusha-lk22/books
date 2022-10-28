import { Link, Outlet } from "react-router-dom"

function BooksLayout() {
  
  return (
    <>
    <nav>
      <Link to="/books/book1">Book1</Link>
      <br/>
      <Link to="/books/book2">Book2</Link>
      <br/>
  <Link to="/books/book3">Book3</Link>
  <br/>
  <Link to="/">Home</Link>
  <br/>
<Link to="../">Back</Link>
      </nav>
     <Outlet context={{context: "hello WORLD"}}/>
  </>  
    );
};
export default BooksLayout;