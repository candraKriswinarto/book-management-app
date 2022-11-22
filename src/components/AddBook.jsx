import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import BookForm from "./form/BookForm"

const AddBook = () => {
  const navigate = useNavigate();
  const { books, setBooks } = useContext(BookContext);

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate('/');
  }

  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default AddBook