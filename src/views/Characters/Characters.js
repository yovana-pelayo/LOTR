import React from 'react';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setCharacters(data);
      setLoading(false);
    };
    fetchData();
  }, [race]);
  if (loading) return <div>Loading</div>;
  return (
    <div>
      <div className="select-race">
        <select
          className="race"
          onChange={(e) => {
            setRace(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Human">Human</option>
          <option value="Maiar">Maiar</option>
          <option value="Orc">Orc</option>
        </select>
      </div>
      <div>
        <h1>Characters</h1>
        {characters.map((character) => (
          <ul key={character.id}>
            <li>{character.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

//onChange setRace
