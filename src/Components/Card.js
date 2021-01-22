import React from 'react';
import Image from 'react-bootstrap/Image'


const Card = (props) => {
    // console.log(props)
    return (
        <>
            <div>
                <p></p>
                <div>
                    <p>{props.name}</p>
                </div>
                <div style={{ width: '200px' }}>
                    <a>
                        <Image src={props.url} fluid />
                    </a>
                </div>
                <p></p>
            </div>
        </>
    );
}

export default Card;
