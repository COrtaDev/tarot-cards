import React, { useEffect, useState } from 'react';
import SelectDeck from './Modals/SelectDeck';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    if (modalShow) return;
  });

  return (
    <>
      <SelectDeck
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;
