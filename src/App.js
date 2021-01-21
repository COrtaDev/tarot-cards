import React, { useEffect, useState } from 'react';
import Deck from './Components/Deck';
import { getMajorArcana } from './Helpers/getCards';




function App() {
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    if (deck) return;
    async function getDeck() {
      const deck = await getMajorArcana();
      setDeck(deck);
    };
    getDeck();
  })
  console.log(deck);
  return (
    <>
      <h1>Hello world!</h1>
      <p></p>
      <Deck deck={deck}/>
      <p></p>
    </>
  );
}

export default App;
