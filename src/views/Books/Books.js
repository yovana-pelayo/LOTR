import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading</div>;
  return <div>Books</div>;
}
