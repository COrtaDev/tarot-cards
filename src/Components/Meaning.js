import React, { useState, useEffect } from 'react';

import wiki from 'wikijs';

const Meaning = (props) => {
    const [info, setInfo] = useState(null);
    const [text, setText] = useState([]);

    useEffect(() => {
        if (info) {
            if (!text.length) {
                handleInfo(info);
            }
            return;
        }
        async function getInfo() {
            const page = await wiki().page(props.search);
            const content = await page.sections();
            console.log(content);
            setInfo(content);
        };
        getInfo();

    });

    function handleInfo(info) {
        // console.log(info)
        //this breaks a lot. will need to focus here.
        const text = [];
        for (let i = 0; i < info.length; i++) {
            // console.log(info[i].title.toLowerCase().includes('meanings'))
            if (info[i].title.toLowerCase().includes('meanings')) {
                text.push(info[i].content)
            }

        }
        setText(text);
    };
    console.log(text)
    const cardText = text.map(text => {
        return (
            <p>
                {text}
            </p>
        );
    })
    return (
        <>
            {cardText}
        </>
    )
}

export default Meaning;
