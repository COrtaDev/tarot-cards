import React from 'react';
import Card from './Card';

const Deck = (props) => {
    console.log(props);
    console.log(props.deck);
    console.log(props.deck.cards);
    // const deck = [props.deck];
    // console.log(deck);
    let cards;
    if (!props.deck) return null;
    if (props.deck.id === 'major') {
        cards = props.deck.cards.map((card, i) => {
            return (
                <Card key={i} name={card.cardName} url={card.url} search={card.queryString} />
            )
        });
    } else if (props.deck.id === 'minor') {

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
