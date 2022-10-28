import { useParams, useOutletContext } from "react-router-dom"

function Book() {
  const { id } = useParams();
  const context = useOutletContext();

  return (
    <h1>Book {id} {context.context}</h1>
  )
};
export default Book;