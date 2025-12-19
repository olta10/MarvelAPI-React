import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const fetchCharacters = async (searchText) => {
    try {
      const res = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      const data = await res.json();

      const filtered = data.filter((c) =>
        c.name.toLowerCase().includes(searchText.toLowerCase())
      );

      setCharacters(filtered);
    } catch (err) {
      console.error(err);
      setCharacters([]);
    }
  };

  useEffect(() => {
    fetchCharacters("");
  }, []);

  return (
    <div className="container py-4">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search superhero..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          fetchCharacters(e.target.value);
        }}
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
