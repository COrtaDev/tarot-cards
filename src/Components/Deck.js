import React, { Component, useEffect, useState } from 'react';
import wiki from 'wikijs';
import Card from './Card';
import { getMajorArcana } from '../Helpers/getCards';


const Deck = (props) => {

    if (!props.deck) return null;
    const cards = props.deck.map((card, i) => {
        return (
            <Card key={i} name={card.cardName} search={card.queryString} />
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
