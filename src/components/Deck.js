import { useState } from "react";
import Card from "./Card";

export default function Deck({setPage, setSuccess, deck, setDeck}) {
    const [currentPosition, setCurrentPosition] = useState(0);

    function goNext() {
        const nextPosition = currentPosition + 1;

        if (nextPosition === deck.length) {
            const incorrectCard = deck.find((card) => card.status === 'incorrect');

            if (incorrectCard) setSuccess(false);
            else setSuccess(true);

            setPage('finalMessage');
        }
        else setCurrentPosition(nextPosition);
    }

    function updateDeck(title, status) {
        const newDeck = [...deck];

        const updateCard = newDeck.find(card => card.title === title);
        updateCard.status = status;

        setDeck(newDeck);
    }

    const deckJSX = deck.map(card => (
        <Card
            title={card.title}
            answer={card.answer}
            position={currentPosition}
            deckSize={deck.length}
            goNext={goNext}
            updateDeck={updateDeck}
        />
    ));

    return (<>{deckJSX[currentPosition]}</>);


}