import wiki from 'wikijs';

export async function getMajorArcana() {
    const page = await wiki().page('Major_Arcana');
    const [tables] = await page.tables();
    let deck = await buildDeck(tables);
    for (let i = 0; i < deck.length; i++) {
        deck[i]['url'] = await getImgUrl(deck[i].queryString);
    }
    return deck;
}

export async function getMinorArcana(){
    const page = await wiki().page('Minor_Arcana');
    const [tables] = await page.tables();
    let deck = await buildDeck(tables);

}

function buildDeck(tables) {
    const deck = tables.map((table) => {
        const queryString = makeQueryString(table.card);
        if (table.card.startsWith("Strength")) {
            return (
                {
                    cardName: "Strength",
                    queryString: queryString,
                }
            )
        };
        if (table.card.startsWith("Justice")) {
            return (
                {
                    cardName: "Justice",
                    queryString: queryString,
                }
            )
        };
        return (
            {
                cardName: table.card,
                queryString: queryString,
            }
        )
    });
    return deck;
}

function makeQueryString(str) {
    if (str.startsWith("Strength")) str = "Strength";
    if (str.startsWith("Justice")) str = "Justice";
    str = str.replaceAll(" ", "_")
    str = str + "_(Tarot_card)";
    return str;
}

async function getImgUrl(queryString) {
    const page = await wiki().page(queryString);
    const rawImg = await page.rawImages();
    for (let i = 0; i < rawImg.length; i++) {
        if (rawImg[i].title.includes("RWS")) {
            return (rawImg[i].imageinfo[0].url)
        }
    }
};

// export default getMajorArcana;
