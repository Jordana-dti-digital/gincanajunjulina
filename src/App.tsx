import React, { useEffect, useRef, useState } from 'react';

import './App.css';
import Cartao from './components/Cartao';
import ProgressoVoto from './components/ProgressoVoto';
import { CardInfo } from './types';
import Cards from './data/cards';

function App() {

  const [funniest, setFunniest] = useState<CardInfo | null>(null);
  const [mostBeautiful, setMostBeautiful] = useState<CardInfo | null>(null);
  const [count, setCount] = useState(0);
  const initial = { mostBeautiful, funniest, count };
  const previousState = usePrevious(initial);

  useEffect(() => {
    if (!previousState) {
      return;
    }
    const previousBeautiful = previousState.mostBeautiful;
    const previousFunniest = previousState.funniest

    if ((previousBeautiful && !mostBeautiful) || (previousFunniest && !funniest)) {
      setCount(count - 1);
    } else if ((!previousBeautiful && mostBeautiful) || (!previousFunniest && funniest)) {
      setCount(count + 1);
    }

    const previousCount = previousState.count;
    if ((previousCount > 0 && count === 0) || (previousCount === 0 && count > 0)) {
      toggleBarDisplay();
    }

  }, [funniest, mostBeautiful, previousState, count]);


  return (
    <>
      <header className="combobox">
        <h1>Galeria <br />Fecaniguifron</h1>
        <p>Aqui você pode conferir todas as submissões de cartões de natal e votar
            <img className="logo" src="./guilda.png" alt="Guilda de frontend" draggable="false" unselectable="on" />
          <ul>
            <li>No cartão que você achou mais <strong>divertido</strong>;</li>
            <li>No cartão que você achou mais <strong>bonito</strong>.</li>
          </ul>
        </p>
      </header>
      <div className="container">
        <main className="content">
          <article className="gallery">
            {Cards.map(card => (
              <Cartao config={card}
                setFunniest={setFunniest}
                setMostBeautiful={setMostBeautiful}
                isFunniest={funniest?.titulo === card.titulo}
                isMostBeautiful={mostBeautiful?.titulo === card.titulo}
              />
            ))}
          </article>
          <footer>
            <span>dti digital</span>
            <br />
            <span>Guilda de Frontend</span>
            <br />
            <a href="mailto:joao.rosa@dtidigital.com.br" className="link--text">
              <span className="link">Contato</span>
              <span aria-hidden="true" className="link--hover">Contato</span>
            </a>
          </footer>
        </main>
      </div>
      <ProgressoVoto funniest={funniest} mostBeautiful={mostBeautiful} />
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
