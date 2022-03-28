import React from 'react';
import { useState, useEffect } from 'react';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <div>
      <h1>Lord Of The Rings</h1>
      <div>
        <img src={`${process.env.PUBLIC_URL}/films/${films}.jpeg`} />
      </div>
    </div>
  );
}
