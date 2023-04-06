import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../services/api/users';

const Collection = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}collections`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch collections.');
        }
      })
      .then((data) => {
        setCollections(data.collections);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Collections</h1>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>{collection.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Collection;
