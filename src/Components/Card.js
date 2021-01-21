import React, { useEffect, useState } from 'react';
import wiki from 'wikijs';

const Card = (props) => {
    const [imgUrl, setImgUrl] = useState(null);
    useEffect(() => {
        if (imgUrl) return;
        async function getImgUrl() {
            const page = await wiki().page(props.search);
            const rawImg = await page.rawImages();
            for (let i = 0; i < rawImg.length; i++) {
                if (rawImg[i].title.includes("RWS")) {
                    setImgUrl(rawImg[i].imageinfo[0].url)
                }
            }
        };
        getImgUrl();
    });

    return (
        <>
            <div>
                <p></p>
                <h3>{props.name}</h3>
                <img src={imgUrl}></img>
                <p></p>
            </div>
        </>
    );
}

export default Card;
