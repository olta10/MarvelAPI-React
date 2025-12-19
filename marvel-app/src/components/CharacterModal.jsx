const CharacterModal = ({ character, onClose }) => {
  return (
    <div className="modal show d-block" tabIndex="-1" onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{character.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img
              src={character.thumbnail}
              alt={character.name}
              className="img-fluid mb-3"
            />
            <p>{character.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
