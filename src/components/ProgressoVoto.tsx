import React from 'react'
import { CardInfo } from '../types';

type Props = {
    funniest: CardInfo | null;
};

export default function ProgressoVoto({ funniest }: Props) {
    return (
        <article className="vote-progress">
            <section className="candidate-info">
                <img className="preview" src={funniest?.urlPreview} alt="" />
                <h4>Cartão mais Engraçado</h4>
                <p>{funniest ? `"${funniest.titulo}"` : "Ainda não escolhido!"}</p>
            </section>         
            <a href="https://forms.office.com/r/uCf332t1YQ" 
                target="_blank" rel="noopener noreferrer" className="vote-anchor">
                Votar!
            </a>
        </article>
    )
}
