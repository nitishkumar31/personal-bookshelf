import { useState, useEffect } from "react";
import axios from "axios";
import SearchSection from "../components/SearchSection";
import BookCard from "../components/BookCard";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [latestBooks, setLatestBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLatestBooks = async () => {
      try {
        const response = await axios.get(
          "https://openlibrary.org/subjects/science_fiction.json?limit=10"
        );
        setLatestBooks(response.data.works);
      } catch (error) {
        console.error("Error fetching the latest books", error);
      }
    };
    fetchLatestBooks();
  }, []);

  const handleSearch = async (e) => {
    const q = e.target.value;
    setQuery(q);
    setIsLoading(true);
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${q}&limit=10&page=1`
    );
    setResults(response.data.docs);
    setIsLoading(false);
  };

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    const existingBook = bookshelf.find((b) => b.key === book.key);
    if (!existingBook) {
      localStorage.setItem("bookshelf", JSON.stringify([...bookshelf, book]));
    }
  };

  return (
    <>
      <SearchSection
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      {query.length > 2 ? (
        <div className="result-container">
          {isLoading ? <h3>Loading...</h3> : <h3>Search Results</h3>}
          <div className="book-list">
            {results.map((book) => (
              <BookCard
                key={book.key}
                book={book}
                handleAction={addToBookshelf}
                context="search"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h3>Latest Books</h3>
          <div className="book-list">
            {latestBooks.map((book) => (
              <BookCard
                key={book.key}
                book={book}
                handleAction={addToBookshelf}
                context="search"
              />
            ))}
          </div>
        </div>
      )}

      {results.length === 0 && query.length > 2 && !isLoading && (
        <div className="result-container">
          <h3>No results found!</h3>
        </div>
      )}
    </>
  );
};

export default SearchPage;
