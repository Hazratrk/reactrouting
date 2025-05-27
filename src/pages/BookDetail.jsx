import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://book-store-api-liard-three.vercel.app/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(err => console.error("Xəta baş verdi:", err));
  }, [id]);

  if (!book) return <p>Yüklənir...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Müəllif:</strong> {book.author}</p>
      <p><strong>Açıqlama:</strong> {book.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default BookDetail;
