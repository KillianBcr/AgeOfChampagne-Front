import React, { useEffect, useState } from 'react';
import { fetchCollections } from '../services/api/collection';

const Collection = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetchCollections()
      .then((collections) => {
        setCollections(collections);
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
