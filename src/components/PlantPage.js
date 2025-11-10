import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // 1️⃣ Fetch all plants when the component loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  // 2️⃣ Add a new plant to the list
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

   // 3️⃣ Filter plants by search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      {/* Pass callback to handle adding new plants */}
      <NewPlantForm onAddPlant={handleAddPlant} />

      {/* Pass search and setter to Search */}
      <Search search={search} setSearch={setSearch} />

      {/* Pass filtered plants to PlantList */}
      <PlantList plants={filteredPlants} />
    </main>
  );
}

  