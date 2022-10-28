import { Link, Outlet } from "react-router-dom"

function OtherLayout() {
  
  return (
    <>
    <nav>
      <Link to="/contact">Contact</Link>
      <br/>
      <Link to="/about">About</Link>
      <br/>
        </nav>
     <Outlet />
  </>  
    );
};
export default OtherLayout;