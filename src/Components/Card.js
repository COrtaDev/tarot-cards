import React from 'react';

const Card = (props) => {
    return (
        <>
            <div>
                <p></p>
                <h3>{props.name}</h3>
                <img src={props.url} alt={""}></img>
                <p></p>
            </div>
        </>
    );
}

export default Card;
