import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(
      (book) => book.key !== bookToRemove.key
    );
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="bookshelf">
      <h1>My Bookshelf</h1>
      {bookshelf.length === 0 ? (
        <p>No books in your bookshelf</p>
      ) : (
        <div className="book-list">
          {bookshelf.map((book, index) => (
            <BookCard
              key={index}
              book={book}
              handleAction={removeFromBookshelf}
              context="bookshelf"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookshelfPage;
