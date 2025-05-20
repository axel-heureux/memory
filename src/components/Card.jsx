function Card({ image, isFlipped, onClick }) {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-face card-back"></div>
        <div className="card-face card-front">
          <img src={image} alt="Carte" />
        </div>
      </div>
    </div>
  );
}

export default Card;
