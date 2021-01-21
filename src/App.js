import React, { useEffect, useState } from 'react';
import Deck from './Components/Deck';
import { getMajorArcana } from './Helpers/getCards';

import 'bootstrap/dist/css/bootstrap.min.css';



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
  return (
    <>
      {/* <h1>Hello world!</h1> */}
      <p></p>
      <Deck deck={deck}/>
      <p></p>
    </>
  );
}

export default App;
