import wiki from 'wikijs';

export async function getMajorArcana() {
    const page = await wiki().page('Major_Arcana');
    const [tables] = await page.tables();
    let deck = await buildDeck(tables);
    for (let i = 0; i < deck.length; i++) {
        deck[i]['url'] = await getImgUrl(deck[i].queryString);
    }
    return (
        {
            id: 'major',
            deckName: 'The Major Arcana',
            cards: deck,
        }
    );
};

export async function getMinorArcana() {
    const page = await wiki().page('Minor_Arcana');
    const images = await page.images();
    const deck = buildSuits(images);
    // console.log(deck);
    return (
        {
            id: 'minor',
            deckName: "The Minor Arcana",
            cards: deck,
        }
    );
};

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
};

function makeQueryString(str) {
    if (str.startsWith("Strength")) str = "Strength";
    if (str.startsWith("Justice")) str = "Justice";
    str = str.replaceAll(" ", "_")
    str = str + "_(Tarot_card)";
    return str;
};

async function getImgUrl(queryString) {
    const page = await wiki().page(queryString);
    const rawImg = await page.rawImages();
    for (let i = 0; i < rawImg.length; i++) {
        if (rawImg[i].title.includes("RWS")) {
            return (rawImg[i].imageinfo[0].url)
        }
    }
};

function buildSuits(strArr) {
    const wands = strArr.filter(imgUrl => imgUrl.includes('Wands'));
    const pents = strArr.filter(imgUrl => imgUrl.includes('Pents'));
    const cups = strArr.filter(imgUrl => imgUrl.includes('Cups'));
    const swords = strArr.filter(imgUrl => imgUrl.includes('Swords'));
    const suits = [
        buildCardFromSuit(wands, "Wands"),
        buildCardFromSuit(pents, "Pents"),
        buildCardFromSuit(cups, "Cups"),
        buildCardFromSuit(swords, "Swords"),
    ];
    return suits;
};

function buildCardFromSuit(suitArr, suit) {
    const cards = suitArr.map(card => {
        const cardName = makeCardNameFromUrl(card, suit);
        // console.log(cardName);
        let id;
        for (let key in helper) {
            if (cardName.startsWith(helper[key])) {
                id = key;
                break;
            }
        }
        // console.log(id);
        return ({
            id: id,
            suit: suit,
            cardName: cardName,
            imgUrl: card,
        });
    });
    return cards;
}

function makeCardNameFromUrl(urlStr, suit) {
    const subStr = urlStr.slice(urlStr.indexOf(suit), urlStr.indexOf(".jpg"));
    for (let key in helper) {
        if (subStr.endsWith(key)) {
            return `${helper[key]} of ${suit}`;
        }
    }
}

const helper = {
    '01': "Ace",
    '02': "Two",
    '03': "Three",
    '04': "Four",
    '05': "Five",
    '06': "Six",
    '07': "Seven",
    '08': "Eight",
    '09': "Nine",
    '10': "Ten",
    '11': "Page",
    '12': "Knight",
    '13': "Queen",
    '14': "King",
};
