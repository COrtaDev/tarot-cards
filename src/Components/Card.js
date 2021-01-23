import React, { useState } from 'react';
import CardModal from '../Modals/CardModal';
import { Image } from 'react-bootstrap';


const Card = (props) => {
    const [modalShow, setModalShow] = useState(false);
    // console.log(props)
    return (
        <>
            <div>
                <p></p>
                <div>
                    <p>{props.name}</p>
                </div>
                <div style={{ width: '200px' }}>
                    <a onClick={() => setModalShow(true)}>
                        <Image src={props.url} fluid />
                    </a>
                </div>
                <p></p>
            </div>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                name={props.name}
                url={props.url}
                search={props.search}
            />
        </>
    );
}

export default Card;
