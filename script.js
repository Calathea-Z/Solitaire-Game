//Declare deck
let cardDeck = [];
//Declare game board variables.
let stockStack = [];
let wasteStack = [];
// const gameBoard = [
// let stackOne = [],
// let stackTwo = [],
// let stackThree = [],
// let stackFour = [],
// let stackFive = [],
// let stackSix = [],
// let stackSeven = [],
// let spadeStack = [],
// let clubStack = [],
// let diamondStack = [],
// let heartStack = [],
// ];
console.log(gameBoard);


//Declare suits
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

gameLoop();




//Shuffles the deck. 
function shuffleDeck(){
randomizeSuit(suits.clubs);
randomizeSuit(suits.diamonds);
randomizeSuit(suits.hearts);
randomizeSuit(suits.spades);
};

//Shuffles each suit set. 
function randomizeSuit(array){
    while(array.length){
        const random = Math.floor(Math.random() * array.length);
        const randomTwo = Math.floor(Math.random() * 53);
        let randomArrayElement = array.splice(random, 1)[0];
        cardDeck.splice(randomTwo,0,randomArrayElement);
    }
    return cardDeck
};

function buildTable(){
for (i = 0; i < 28; i ++){



}


}

//Run game function.
function gameLoop() {
    shuffleDeck();
    console.log(cardDeck);
};




