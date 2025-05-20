function Card({ image, isFlipped, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {isFlipped ? (
        <img src={image} alt="Carte" className="card-face" />
      ) : (
        <div className="card-back" />
      )}
    </div>
  );
}

export default Card;
