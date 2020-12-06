let deck = [];
const typesCards = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

const createDeck = () => {
    for(let i=2;i <= 10;i++){
        for(let typeCard of typesCards){
            deck.push(i + typeCard);
        }
    }

    for(let typeCard of typesCards) {
        for(let special of specials){
            deck.push(typeCard+special);
        }
    }

    deck = _.shuffle(deck);
}

const getCard = () => {
    
}

createDeck();
