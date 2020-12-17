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
                <img className="preview" src={funniest?.urlPreview} alt="" />
                <h4>Cartão mais Engraçado</h4>
                <p>{funniest ? `"${funniest.titulo}"` : "Ainda não escolhido!"}</p>
            </section>
            <section className="candidate-info">
                <img className="preview" src={mostBeautiful?.urlPreview} alt="" />
                <h4>Cartão mais Bonito</h4>
                <p>{mostBeautiful ? `"${mostBeautiful.titulo}"` : "Ainda não escolhido!"}</p>
            </section>
            <a href="#" className="vote-anchor">
                Votar!
            </a>
        </article>
    )
}
