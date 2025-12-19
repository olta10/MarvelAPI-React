const CharacterCard = ({ character, onClick }) => {
  return (
    <div className="col-6 col-sm-4 col-md-3 mb-4">
      <div className="card h-100 shadow-sm" onClick={onClick} style={{ cursor: "pointer" }}>
        <img
          src={character.thumbnail}
          className="card-img-top"
          alt={character.name}
        />
        <div className="card-body">
          <h6 className="card-title text-center">{character.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
