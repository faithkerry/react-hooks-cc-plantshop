import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  // Local state to track sold out status
  const [soldOut, setSoldOut] = useState(false);

  function handleToggleSoldOut() {
    setSoldOut(!soldOut);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {soldOut ? (
        <button className="primary" onClick={handleToggleSoldOut}>
          Sold Out
        </button>
      ) : (
        <button onClick={handleToggleSoldOut}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
