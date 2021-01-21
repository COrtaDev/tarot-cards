import React, { useEffect, useState } from 'react';
import Deck from './Components/Deck';
import SelectDeck from './Modals/SelectDeck';
import { getMajorArcana } from './Helpers/getCards';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [modalShow, setModalShow] = useState(true)
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    if (modalShow) return;
    if (deck) return;
    async function getDeck() {
      const deck = await getMajorArcana();
      setDeck(deck);
    };
    getDeck();
  });

  return (
    <>
      <p></p>
      <Deck deck={deck} />
      <p></p>
      <SelectDeck
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;
