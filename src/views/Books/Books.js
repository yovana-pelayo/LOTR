import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const params = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
      setLoading(false);
    };
    fetchData();
  }, [params]);

  if (loading) return <div>Loading</div>;
  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <ul key={book.id}>
          <li>{book.title}</li>
        </ul>
      ))}
    </div>
  );
}
