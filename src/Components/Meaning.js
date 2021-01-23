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
        async function getFandomInfo() {
            const page = await wiki({
                apiUrl: 'https://tarot.fandom.com/api.php?',
                origin: null
            }).page('The_Magician')
            console.log(page);
        };
        getFandomInfo()
        async function getInfo() {
            const page = await wiki().page(props.search);
            const content = await page.sections();
            console.log(content);
            setInfo(content);
        };
        getInfo();
    });
    const titlesToAvoid = [
        "History", "Bibliography", "References", "Alternative decks", "Other versions", "In other decks",
        "External links", "See also", "Sources", "In other media", "Further reading",
        "In art", "Notes", "Citations", "In popular culture", "Extras",
    ];
    function handleInfo(info) {
        console.log("All Info: ", info)
        const titles = info.map(section => section.title);
        let text = info.map(section => {
            if (!titlesToAvoid.includes(section.title)) {
                if (!section.content && section.items) {
                    console.log("Subsections: ", section.items)
                    let subectionContent = section.items.map(subsection => subsection.content)
                    console.log("Subsection Content: ", subectionContent);
                    return [...subectionContent];
                } else if (section.content && section.items) {
                    console.log("Subsections: ", section.items)
                    let subectionContent = section.items.map(subsection => subsection.content)
                    console.log("Subsection Content: ", subectionContent);
                    return [section.content, ...subectionContent,];
                }
                return section.content
            }
        });
        text = text.filter(content => content).flat();
        console.log("Titles: ", titles);
        setText(text);
    };
    console.log("Text: ", text)
    const cardText = text.map((text, i) => {
        return (
            <p key={i}>
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
