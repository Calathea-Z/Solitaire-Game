//Declare deck
let cardDeck = [];
//Declare game board variables.
let stockStack = [];
let wasteStack = [];
let stackOne = [];
let stackTwo = [];
let stackThree = [];
let stackFour = [];
let stackFive = [];
let stackSix = [];
let stackSeven = [];
let spadeStack = [];
let clubStack = [];
let diamondStack = [];
let heartStack = [];
let tableau = [[stackOne], [stackTwo], [stackThree], [stackFour],
                 [stackFive], [stackSix], [stackSeven]];
                 
//Grabbing the card images 

//Declare suits
let suits = [];
suits['spades'] = [
    ['A','Spade', ],
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


runGame();




//Shuffles the deck. 
function shuffleDeck(){
randomizeSuit(suits.clubs);
randomizeSuit(suits.diamonds);
randomizeSuit(suits.hearts);
randomizeSuit(suits.spades);
};

//Shuffles each suit set. 
function randomizeSuit(array){
    //console.log(`RANDOMIZE FUNCTION LENGTH = ${array.length}`)
        while(array.length){
            const random = Math.floor(Math.random() * array.length);
            const randomTwo = Math.floor(Math.random() * 53);
            let randomArrayElement = array.splice(random, 1)[0];
            cardDeck.splice(randomTwo,0,randomArrayElement);
         }
    return cardDeck
};

function buildStacks(){
let cardNumber = 52;
    for (j = 0; j < 7; j++){
        for (i = (0 + j); i < 7; i ++){  
        //console.log(`-----LOOP ${i} ${cardDeck}----`);
        let tempHolderArray = cardDeck.splice((cardNumber-1),1);
        //console.log(`-----SPLICED VALUE: ${tempHolderArray}`);
        tableau[i].splice([j],1,tempHolderArray);
        //console.log(`STACK${i+1}----: ${gameBoard[i]}`);
        cardNumber--;
         }     
    }
stockStack = cardDeck;
}

function buildUI(){

}



//Run game function.
function runGame() {
    shuffleDeck();
    console.log(`OG DECK - ${cardDeck}----`);
    buildStacks();
    console.log
    console.log(`STOCK STACK - ${stockStack}----`);
    console.log(`STACK 1 -${tableau[0]}`);
    console.log(`STACK 2 -${tableau[1]}`);
    console.log(`STACK 3 -${tableau[2]}`);
    console.log(`STACK 4 -${tableau[3]}`);
    console.log(`STACK 5 -${tableau[4]}`);
    console.log(`STACK 6 -${tableau[5]}`);
    console.log(`STACK 7 -${tableau[6]}`);
}




