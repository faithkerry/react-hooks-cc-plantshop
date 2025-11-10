import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch all plants on mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  // Add new plant to state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants by search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
