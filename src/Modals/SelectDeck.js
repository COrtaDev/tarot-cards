import React from 'react';
import { Container, Jumbotron, Modal } from 'react-bootstrap';

const SelectDeck = (props) => {

    function majorArcanaSelected(event) {
        console.log(event,props);
    }
    function minorArcanaSelected(event){
        console.log(event,props)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div>
                    <a onClick={majorArcanaSelected}>
                        <Jumbotron fluid>
                            <Container>
                                <h1>Major Arcana</h1>
                                <p>
                                    <p>In occult practices, the Major Arcana are the trump cards of a tarot pack.
                                    There are usually 22 such cards in a standard 78-card pack. They are typically numbered from 0 to 21.</p>
                                    <p>Each Major Arcanum depicts a scene, mostly featuring a person or several people, with many symbolic elements. </p>
                                    <p>In the popular mind, tarot is indelibly associated with divination, fortune telling, or cartomancy.</p>
                                </p>
                            </Container>
                        </Jumbotron>
                    </a>
                </div>
                <div>
                    <a onClick={minorArcanaSelected}>
                        <Jumbotron fluid>
                            <Container>
                                <h1>Minor Arcana</h1>
                                <p>
                                    <p>The Minor Arcana are the 56 suit cards of the 78-card deck of tarot cards.
                                    The Minor Arcana comprise four suits with 14 cards each.
                                </p>
                                    <p>Although there are variations, the Minor Arcana commonly employ the Italo-Spanish suits:</p>
                                    <ul>
                                        <li>Wands (alternatively, batons, clubs, or staves),</li>
                                        <li>Cups</li>
                                        <li>Swords</li>
                                        <li>Pentacles (alternatively, coins, disks, or rings).</li>
                                    </ul>
                                </p>
                            </Container>
                        </Jumbotron>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default SelectDeck;
