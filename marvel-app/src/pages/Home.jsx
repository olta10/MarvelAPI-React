import { useState } from "react";
import mockData from "../mockData.json";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";

const Home = () => {
  const [characters, setCharacters] = useState(mockData);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = mockData.filter((c) =>
      c.name.toLowerCase().includes(text.toLowerCase())
    );
    setCharacters(filtered);
  };

  return (
    <div className="container py-4">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search Marvel character..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div className="row">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            onClick={() => setSelected(char)}
          />
        ))}
      </div>

      {selected && (
        <CharacterModal character={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Home;
