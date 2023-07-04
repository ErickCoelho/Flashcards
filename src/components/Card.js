import { useState } from 'react';
import './Card.css';

export default function Card({ title, answer, position, deckSize, goNext, updateDeck }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [status, setStatus] = useState('');

    function answerCard(status) {
        setShowAnswer(true);
        setStatus(status);
        updateDeck(title, status);
        console.log(status);
    }

    if (isFlipped)
        return (
            <div className={`cardContainer ${status}`}>
                <div className={`card back`}>
                    <div className='position'>{parseInt(position) + 1}/{deckSize}</div>
                    <div className='title'>{title}</div>
                    <div className='text'>{answer}</div>
                    <div className='opcoes'>
                        <div className='opcao neutral' onClick={() => answerCard('neutral')}>Aprendi agora</div>
                        <div className='opcao incorrect' onClick={() => answerCard('incorrect')}>Não lembrei</div>
                        <div className='opcao correct' onClick={() => answerCard('correct')}>Lembrei com esforço</div>
                        <div className='opcao zap' onClick={() => answerCard('zap')}>Zap!</div>
                    </div>
                    <div className='seta' onClick={() => { goNext(); setIsFlipped(false); setStatus(''); }}><ion-icon name="arrow-undo"></ion-icon></div>

                </div>
            </div>
        );
    else
        return (
            <div className={`cardContainer ${status}`}>
                <div className="card front">
                    <div className='position'>{parseInt(position) + 1}/{deckSize}</div>
                    <div className='title'>{title}</div>
                    <div className='seta' onClick={() => setIsFlipped(true)}><ion-icon name="arrow-undo"></ion-icon></div>
                </div>
            </div>
        );
}