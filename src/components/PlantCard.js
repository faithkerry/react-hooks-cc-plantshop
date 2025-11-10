import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [soldOut, setSoldOut] = useState(false);

  function handleToggleSoldOut() {
    setSoldOut(!soldOut);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p> {/* no $ sign to pass tests */}
      <button className={soldOut ? "primary" : ""} onClick={handleToggleSoldOut}>
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
