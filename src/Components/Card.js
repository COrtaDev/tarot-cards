import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

const Card = (props) => {
    return (
        <>
            <div>
                <p></p>
                <div>
                    <p>{props.name}</p>
                </div>
                {/* <img src={props.url} alt={""}></img> */}
                <div style={{ width: '200px' }}>
                    <Image src={props.url} fluid />
                </div>
                <p></p>
            </div>
        </>
    );
}

export default Card;
