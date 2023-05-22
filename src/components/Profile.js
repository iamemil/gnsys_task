import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <h1>Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={character.image} alt={character.name} />
          <p>Name: {character.name}</p>
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
}

export default Profile;
