import Lottie, { Options } from 'react-lottie';
import BonitoData from '../assets/lottie-bonito.json';
import EngracadoData from '../assets/lottie-engracado.json';
import { CardInfo } from '../types';



interface Props {
    config: CardInfo,
    setFunniest: (config: any) => void;
    setMostBeautiful: (config: any) => void;
    isFunniest: boolean;
    isMostBeautiful: boolean;
};

export default function Cartao({ config, setFunniest, setMostBeautiful, isFunniest, isMostBeautiful }: Props) {
    const beautifulLottieOptions = { animationData: BonitoData, autoplay: false, loop: false } as Options;
    const funnyLottieOptions = { animationData: EngracadoData, autoplay: false, loop: false } as Options;
    const { urlPreview, titulo, url } = config;
    return (
        <article>
            <h2>{titulo}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="card-preview">
                    <img src={urlPreview} alt={titulo} />
                </div>
            </a>
            <section className="voting">
                <button className="register-vote-button" onClick={() => {
                    if (isMostBeautiful) {
                        setMostBeautiful(undefined);
                    } else {
                        setMostBeautiful(config);
                    }
                }
                }>
                    <Lottie options={beautifulLottieOptions} width="32px" height="32px"></Lottie>
                    <span>{isMostBeautiful ? "Desmarcar +Bonito" : "Marcar +Bonito"}</span>
                </button>
                <button className="register-vote-button" onClick={() => {
                    if (isFunniest) {
                        setFunniest(undefined);
                    } else {
                        setFunniest(config);
                    }
                }}>
                    <Lottie options={funnyLottieOptions} width="32px" height="32px"></Lottie>
                    <span>{isFunniest ? "Desmarcar +Engraçado" : "Marcar +Enrgaçado"}</span>
                </button>
            </section>
        </article>
    )
}
