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

//Declare suits // Check against these to win.
let suits = [];
suits['spades'] = [
    ['A', 'Spade'],
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

function buildColumns(){
let cardNumber = 52;
    for (let j = 0; j < 7; j++){
        for (let i = (0 + j); i < 7; i ++){  
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

function buildUI(deck){
let temp = document.querySelector('#stock-stack');   
    console.log(temp);

    for(let i =0 ; i < deck.length; i++){
    
        console.log(deck.length);
        console.log(cardDeck[i][0]);
        console.log(cardDeck[i][1]);
        
        
        let card = document.createElement('div');
        let emoji = '';
            if(deck[i][1] === 'Diamond'){
                emoji = '♦️';
                card.style.color = 'red';
            }else if (deck[i][1] === 'Spade'){
                emoji = '♠️';
                card.style.color = 'black';
            }else if (deck[i][1] === 'Heart'){
                emoji = '♥️';
                card.style.color = 'red';
            }else if (deck[i][1] === 'Club'){
                emoji = '♣️';
                card.style.color = 'black'
            }
                card.innerText = (deck[i][0] + ' ' + emoji);
                card.className = 'card-stack-area';
                console.log(card.innerText);
                console.log(card);
                temp.appendChild(card);
    }
}

// function buildUI(deck){
//     document.getElementById("deck").innerHTML = '';
    
//     for(let i = 0; i < cardDeck.length; i++){
//         let card = document.createElement('div');
//         let value = document.createElement('div');
//         let suit = document.createElement('div');
//         card.className = "card-stack-area";
//         value.className = "card-stack-area";
//         suit.className = "card-stack-area" + cardDeck[i][0];

//         value.innerHTML = cardDeck[i][1];
//         card.appendChild(value);
//         card.appendChild(suit);

//         document.getElementById("deck").appendChild(card);
//     }
        
//     } 
// }

//Run game function.
function runGame() {
    shuffleDeck();
    console.log(`OG DECK - ${cardDeck}----`);
    buildUI(cardDeck);
    buildColumns();
    console.log(`STOCK Pile - ${stockStack}----`);
    console.log(`Column 1 -${tableau[0]}`);
    console.log(`Column 2 -${tableau[1]}`);
    console.log(`Column 3 -${tableau[2]}`);
    console.log(`Column 4 -${tableau[3]}`);
    console.log(`Column 5 -${tableau[4]}`);
    console.log(`Column 6 -${tableau[5]}`);
    console.log(`Column 7 -${tableau[6]}`);
}



