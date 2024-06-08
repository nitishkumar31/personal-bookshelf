const BookCard = ({ book, handleAction, context }) => {
  return (
    <div className="book-card">
      <div className="book-style">
        <h3>{book.title}</h3>
        {book.author_name && <p>by {book.author_name?.join(", ")}</p>}
        <span>
          <p>Total Editions: {book.edition_count}</p>
          <p>First Publish Year: {book.first_publish_year}</p>
        </span>
      </div>

      {context === "search" ? (
        <button className="add-btn" onClick={() => handleAction(book)}>
          Add to Bookshelf
        </button>
      ) : (
        <button className="remove-btn" onClick={() => handleAction(book)}>
          Remove from Bookshelf
        </button>
      )}
    </div>
  );
};

export default BookCard;
