import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Modal } from 'react-bootstrap';
import Deck from '../Components/Deck';
import { getMajorArcana, getMinorArcana } from '../Helpers/getCards';

const SelectDeck = (props) => {
    const [modalShow, setModalShow] = useState(true)
    const [selectedDeck, setSelectedDeck] = useState(null);
    const [deck, setDeck] = useState(null);

    useEffect(() => {
        if (deck) return;
        if (!selectedDeck) return;
        if (selectedDeck === 'major') {
            async function getDeck() {
                const deck = await getMajorArcana();
                setDeck(deck);
            };
            getDeck();
        } else if (selectedDeck === 'minor') {
            async function getDeck() {
                const deck = await getMinorArcana();
                setDeck(deck);
            };
            getDeck();
        }
    });

    // function minorArcanaSelected(event) {
    //     setSelectedDeck('minor');
    //     // setModalShow(false)
    //     console.log(event, props, modalShow, selectedDeck)
    // }

    if (deck) {
        // console.log(deck);
        return (
            <>
                <div><h1>{deck.deckName}</h1></div>
                <p></p>
                <Deck deck={deck} />
                <p></p>
            </>
        )
    } else {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                selectedDeck={selectedDeck}
            >
                <Modal.Body>
                    <div>
                        <a onClick={() => {
                            setSelectedDeck('major')
                            setModalShow(false)
                        }}>
                            <Jumbotron fluid>
                                <Container>
                                    <h1>Major Arcana</h1>
                                    <div>
                                        <p>In occult practices, the Major Arcana are the trump cards of a tarot pack.
                                    There are usually 22 such cards in a standard 78-card pack. They are typically numbered from 0 to 21.</p>
                                        <p>Each Major Arcanum depicts a scene, mostly featuring a person or several people, with many symbolic elements. </p>
                                        <p>In the popular mind, tarot is indelibly associated with divination, fortune telling, or cartomancy.</p>
                                    </div>
                                </Container>
                            </Jumbotron>
                        </a>
                    </div>
                    <div>
                        <a onClick={() => {
                            setSelectedDeck('minor')
                            setModalShow(false)
                        }}>
                            <Jumbotron fluid>
                                <Container>
                                    <h1>Minor Arcana</h1>
                                    <div>
                                        <p>The Minor Arcana are the 56 suit cards of the 78-card deck of tarot cards.
                                        The Minor Arcana comprise four suits with 14 cards each.
                                         </p>
                                        <p>Although there are variations, the Minor Arcana commonly employ the Italo-Spanish suits:</p>
                                        <div>
                                            <ul>
                                                <li>Wands (alternatively, batons, clubs, or staves),</li>
                                                <li>Cups</li>
                                                <li>Swords</li>
                                                <li>Pentacles (alternatively, coins, disks, or rings).</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Container>
                            </Jumbotron>
                        </a>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
export default SelectDeck;
