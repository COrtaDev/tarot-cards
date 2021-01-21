import wiki from 'wikijs';

export async function getMajorArcana() {
    const page = await wiki().page('Major_Arcana');
    const [tables] = await page.tables();
    // const majorArcana = tables;
    // console.log(tables);
    // console.log(majorArcana);
    const deck = await buildDeck(tables);
}

async function buildDeck(tables) {
    console.log(tables)
    // console.log(tables[0][0])
    const deck = await tables.forEach(table => {
        console.log(table.card)
        // we will need to handle when the card has 2 choices
    });
}

function makeQueryString (str){

}
