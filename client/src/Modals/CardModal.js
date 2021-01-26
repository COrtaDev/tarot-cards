import React, { useEffect, useState } from 'react';
import Meaning from '../Components/Meaning';
import wiki from 'wikijs';
import {
    Container, Jumbotron,
    Modal, Button,
    Image, Row, Col
} from 'react-bootstrap';

const CardModal = (props) => {
    // const [summary, setSummary] = useState(null)
    // console.log(props)
    // useEffect(() => {
    //     if (summary) return;
    //     async function getSummary() {
    //         const page = await wiki().page(props.search);
    //         // const summary = await page.summary();
    //         const content = await page.sections();
    //         console.log(content);
    //         // console.log(summary)
    //         // setSummary(summary);
    //     }
    //     getSummary();
    // });

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Image src={props.url} fluid />
                            </Col>
                            <Col>
                                <Meaning search={props.search} />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CardModal;
