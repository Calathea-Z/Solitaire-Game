//declare deck
let cardDeck = [];

//declare suits
let suits = [];
suits['spades'] = [
    ['A','Spade'],
    ['2', 'Spade'],
    ['3', 'Spade'],
    ['4', 'Spade'],
    ['5', 'Spade'],
    ['6', 'Spade'],
    ['7', 'Spade'],
    ['8', 'Spade'],
    ['9', 'Spade'],
    ['10', 'Spade'],
    ['J', 'Spade'],
    ['Q', 'Spade'],
    ['K', 'Spade'],
]

suits['clubs'] = [
    ['A','Club'],
    ['2','Club'],
    ['3','Club'],
    ['4','Club'],
    ['5','Club'],
    ['6','Club'],
    ['7','Club'],
    ['8','Club'],
    ['9','Club'],
    ['10','Club'],
    ['J','Club'],
    ['Q','Club'],
    ['K','Club'],
]

suits['diamonds'] = [
    ['A','Diamond'],
    ['2','Diamond'],
    ['3','Diamond'],
    ['4','Diamond'],
    ['5','Diamond'],
    ['6','Diamond'],
    ['7','Diamond'],
    ['8','Diamond'],
    ['9','Diamond'],
    ['10','Diamond'],
    ['J','Diamond'],
    ['Q','Diamond'],
    ['K','Diamond'],
]

suits['hearts'] = [
    ['A','Heart'],
    ['2','Heart'],
    ['3','Heart'],
    ['4','Heart'],
    ['5','Heart'],
    ['6','Heart'],
    ['7','Heart'],
    ['8','Heart'],
    ['9','Heart'],
    ['10','Heart'],
    ['J','Heart'],
    ['Q','Heart'],
    ['K','Heart'],    
]
function shuffle(){
removeRandom(suits.spades);
removeRandom(suits.clubs);
removeRandom(suits.diamonds);
removeRandom(suits.hearts);
}
(shuffle());

function removeRandom (array) {
    //let shuffledArray = [];
    while(array.length) {
        i=0;
        i++;
        //console.log(`---ARRAY LENGTH: ${array.length}---`)
        const random = Math.floor(Math.random() * array.length);
        randomArrayElement = array.splice(random, 1)[0];
        cardDeck.splice(random,0,randomArrayElement);
        //shuffledArray.push.apply(randomArrayElement);
        //console.log(shuffledArray);
        //console.log(randomArrayElement);
        //console.log(`SHUFFLED ARRAY - ${shuffledArray}`);
    }
    return cardDeck
}
console.log(cardDeck);

//console.log(removeRandom(suits.hearts));





