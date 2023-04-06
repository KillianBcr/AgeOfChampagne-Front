import React, { useEffect, useState } from "react";

const CarteDetails = ({ match }) => {
  const [carte, setCarte] = useState(null);

  useEffect(() => {
    const fetchCarte = async () => {
      try {
        const response = await fetch(`http://localhost:5173/carte/${match.params.id}`);
        const data = await response.json();
        setCarte(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCarte();
  }, [match.params.id]);

  if (!carte) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{carte.name}</h1>
      <p>{carte.description}</p>

    </div>
  );
};

export default CarteDetails;