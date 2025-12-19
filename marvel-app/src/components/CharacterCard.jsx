const CharacterCard = ({ character, onClick }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100" onClick={onClick} style={{ cursor: "pointer" }}>
        <img
          src={character.images?.md}
          className="card-img-top img-fluid"
          alt={character.name}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{character.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
  