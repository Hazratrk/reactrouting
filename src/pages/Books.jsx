import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-store-api-liard-three.vercel.app/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error("Xəta baş verdi:", err));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>Loading</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.id} style={{ marginBottom: "10px" }}>
              <strong>{book.title}</strong> - {book.author}
              <br />
              <Link to={`/books/${book.id}`}>More</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Books;
