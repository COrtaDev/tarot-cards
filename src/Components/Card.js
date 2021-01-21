import React, { useEffect, useState } from 'react';
import wiki from 'wikijs';
import { getMajorArcana } from '../Helpers/getCards';

const Card = (props) => {
    const [imgUrl, setImgUrl] = useState(null);
    // console.log(props)
    useEffect(() => {
        if (imgUrl) return;
        async function getImgUrl() {
            const page = await wiki().page(props.search);
            const rawImg = await page.rawImages();
            // console.log(rawImg)
            for (let i = 0; i < rawImg.length; i++) {
                // console.log(rawImg[i].title);
                if (rawImg[i].title.includes("RWS")) {
                    // console.log(rawImg[i].imageinfo[0].url)
                    setImgUrl(rawImg[i].imageinfo[0].url)
                }
            }
            // setImgUrl(rawImg[1].imageinfo[0].url)
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
