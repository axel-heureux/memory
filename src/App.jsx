import { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';

import chien from './assets/chien.png';
import chat from './assets/chat.png';
import lapin from './assets/lapin.png';
import grenouille from './assets/grenouille.png';

const images = [chien, chat, lapin, grenouille];

const shuffleCards = () => {
  const doubled = [...images, ...images];
  return doubled
    .sort(() => Math.random() - 0.5)
    .map((image, index) => ({
      id: index,
      image,
      isFlipped: false,
      isMatched: false,
    }));
};

function App() {
  const [cards, setCards] = useState(shuffleCards());
  const [flipped, setFlipped] = useState([]);

  const handleClick = (index) => {
    if (flipped.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlipped([...flipped, index]);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].image === cards[second].image) {
        const newCards = [...cards];
        newCards[first].isMatched = true;
        newCards[second].isMatched = true;
        setCards(newCards);
      } else {
        setTimeout(() => {
          const newCards = [...cards];
          newCards[first].isFlipped = false;
          newCards[second].isFlipped = false;
          setCards(newCards);
        }, 1000);
      }
      setFlipped([]);
    }
  }, [flipped]);

  return (
    <div className="game">
      <h1>Jeu de Memory</h1>
      <div className="board">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            image={card.image}
            isFlipped={card.isFlipped || card.isMatched}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
