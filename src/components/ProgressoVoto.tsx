import React from 'react'
import { CardInfo } from '../types';

type Props = {
    mostBeautiful: CardInfo | null;
    funniest: CardInfo | null;
};

export default function ProgressoVoto({ mostBeautiful, funniest }: Props) {
    return (
        <article className="vote-progress">
            <section className="candidate-info">
                <img src={funniest?.urlPreview} alt="" />
                <h4>Cartão mais Engraçado:</h4>
                <p>"{funniest?.titulo}"</p>
            </section>
            <section className="candidate-info">
                <img src={mostBeautiful?.urlPreview} alt="" />
                <h4>Cartão mais Bonito</h4>
                <p>"{mostBeautiful?.titulo}"</p>
            </section>
            <button>Registrar Voto</button>
        </article>
    )
}
