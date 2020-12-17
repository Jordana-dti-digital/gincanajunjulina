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
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=pTuFnHzOcUubFEKc5Nt53aiUxZlmMUJEhkuGydVrE75UNFdORTRUUEpWMVAzMjZHTE1OUzdPSlAwNS4u" className="vote-anchor">
                Votar!
            </a>
        </article>
    )
}
