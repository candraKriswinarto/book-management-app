import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import Book from "./Book";

const ListBook = () => {
  const { books, setBooks } = useContext(BookContext);

  const handleRemoveBook = (id) => {
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks)
  }

  return (
    <div className="listBook">
      {books.length ? books.map(book => (
        <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
      )) : (
        <p className="noData">No books avaliable, Please add some book!</p>
      )}
    </div>
  )
}

export default ListBook