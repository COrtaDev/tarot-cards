import wiki from 'wikijs';

export async function getMajorArcana() {
    const page = await wiki().page('Major_Arcana');
    const [tables] = await page.tables();
    const deck = await buildDeck(tables);
    // console.log(deck)
    return deck;
}

function buildDeck(tables) {
    const deck = tables.map(table => {
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

export default getMajorArcana;
