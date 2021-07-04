import React, { useEffect, useRef, useState } from 'react';

import './App.css';
import Cartao from './components/Cartao';
import ProgressoVoto from './components/ProgressoVoto';
import { CardInfo } from './types';
import Cards from './data/cards';
import { shuffle } from './utils';

function App() {
  const [cards, setCards] = useState<CardInfo[]>([]);
  useEffect(() => {
    setCards(shuffle(Cards));
  }, [])
  const [funniest, setFunniest] = useState<CardInfo | null>(null);
  const [count, setCount] = useState(0);
  const initial = { funniest, count };
  const previousState = usePrevious(initial);

  useEffect(() => {
    if (!previousState) {
      return;
    }
    const previousFunniest = previousState.funniest

    if (previousFunniest && !funniest) {
      setCount(count - 1);
    } else if ((!previousFunniest && funniest)) {
      setCount(count + 1);
    }

    const previousCount = previousState.count;
    if ((previousCount > 0 && count === 0) || (previousCount === 0 && count > 0)) {
      toggleBarDisplay();
    }

  }, [funniest, previousState, count]);


  return (
    <>
      <header className="combobox">
        <h1>Galeria <br />Gincana Junina/Julina 2021</h1>
        <p>Aqui você pode conferir todas as submissões da gincana e votar naquela que você achou mais <strong>divertida</strong>    
            <img className="logo" src="./guilda.png" alt="Guilda de frontend" draggable="false" unselectable="on" />
             
        </p>
      </header> 
      <div className="container">
        <main className="content">
          <article className="gallery">
            {cards.map(card => (
              <Cartao config={card}
                key={card.titulo}
                setFunniest={setFunniest}              
                isFunniest={funniest?.titulo === card.titulo}
              />
            ))}
          </article>
          <footer>
            <span>dti digital</span>
            <br />
            <span>Guilda de Frontend</span>
            <br />
            <a href="mailto:jordana.carvalho@dtidigital.com.br" className="link--text">
              <span className="link">Contato</span>
              <span aria-hidden="true" className="link--hover">Contato</span>
            </a>
          </footer>
        </main>
      </div>
      <ProgressoVoto funniest={funniest} />
    </>
  );
}

export default App;
function toggleBarDisplay() {
  const style = document.documentElement.style;
  const isDisplayed = style.getPropertyValue('--progress-bar-offset') === '0';
  const newValue = isDisplayed ? -1 : 0;
  style.setProperty('--progress-bar-offset', newValue.toString());
  new Audio('./blop.mp3').play();
}

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
