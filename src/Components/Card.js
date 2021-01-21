import React, { useEffect, useState } from 'react';
import wiki from 'wikijs';
import { getMajorArcana } from '../Helpers/getCards';

const Card = () => {
    const [imgUrl, setImgUrl] = useState('');
    useEffect(() => {
        async function getWiki() {
            const page = await wiki().page('The_Fool_(Tarot_card)');
            const rawImg = await page.rawImages();
            // console.log(rawImg[1].imageinfo[0].url);
            setImgUrl(rawImg[1].imageinfo[0].url)
        }
        getWiki();
        getMajorArcana();
    });
    // console.log(imgUrl);
    return (
        <>
            <div>
                <p></p>
                <h3>Card Name</h3>
                <img src={imgUrl}></img>
                <p></p>
            </div>
        </>
    );
}

export default Card;
