import React from 'react';
import Card from './Card';

const Deck = (props) => {
    console.log(props.deck)
    let cards;
    if (!props.deck) return null;
    if (props.deck.id === 'major') {
        cards = props.deck.cards.map(card => {
            return (
                <Card key={card.id} name={card.cardName} url={card.url} search={card.queryString} />
            )
        });
    } else if (props.deck.id === 'minor') {
        cards = props.deck.cards.map(suit => suit.map(card => {
            return (
                <Card key={card.id} name={card.cardName} url={card.imgUrl} search={card.queryString} />
            )
        }))
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {cards}
            </div>
        </>
    );
}

export default Deck;
