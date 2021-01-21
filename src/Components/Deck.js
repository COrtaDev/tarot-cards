import React from 'react';
import Card from './Card';

const Deck = (props) => {
    
    if (!props.deck) return null;
    const cards = props.deck.map((card, i) => {
        return (
            <Card key={i} name={card.cardName} url={card.url} search={card.queryString} />
        )
    })

    return (
        <>
            <div>
                {cards}
            </div>
        </>
    );
}

export default Deck;
