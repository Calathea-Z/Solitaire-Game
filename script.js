//Declare deck
let cardDeck = [];
//Declare game board variables.
let columnDraw = [];
let columnDiscard = [];
let columnOne = [];
let columnTwo = [];
let columnThree = [];
let columnFour = [];
let columnFive = [];
let columnSix = [];
let columnSeven = [];
let columnSpade = [];
let columnClub = [];
let columnDiamond = [];
let columnHeart = [];
let tableau = [[columnOne], [columnTwo], [columnThree], [columnFour],
                 [columnFive], [columnSix], [columnSeven]];

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
        while(array.length){
            const random = Math.floor(Math.random() * array.length);
            const randomTwo = Math.floor(Math.random() * 53);
            let randomArrayElement = array.splice(random, 1)[0];
            cardDeck.splice(randomTwo,0,randomArrayElement);
         }
    return cardDeck
};
// builds each column on gameboard. 
function buildColumns(){
let cardNumber = 52;
    for (let j = 0; j < 7; j++){
        for (let i = (0 + j); i < 7; i ++){  
        //console.log(`-----LOOP ${i} ${cardDeck}----`);
        let tempArray = cardDeck.splice((cardNumber-1),1);
        //console.log(`-----SPLICED VALUE: ${tempHolderArray}`);
        tableau[i].splice([j],1,tempArray);
        //console.log(`STACK${i+1}----: ${gameBoard[i]}`);
        cardNumber--;
         }     
    }
stockStack = cardDeck;
}


// assigns card graphics to each card
function buildUI(deck){
//build container div so the card can be flippable.
let temp = document.querySelector('#stock-stack');
    for(let j = 0; j < deck.length; j++){
        let whole = document.createElement('div')
        whole.className = 'whole-card'
        whole.setAttribute('id', `card ${j}`);
        temp.appendChild(whole)
    }
//appends actual sides of card.
let tempTwo = document.querySelectorAll('.whole-card');
let tempArray = [...tempTwo];
console.log(tempArray);

    for(let i =0 ; i < deck.length; i++){
        //console.log(cardDeck[i][0]);
        //console.log(cardDeck[i][1]);    
        let front = document.createElement('div');
        let back = document.createElement('div');
       // console.log(`LOOP ---- ${i}----`);
        let emoji = '';
            if(deck[i][1] === 'Diamond'){
                emoji = '♦️';
                front.style.color = 'red';
            }else if (deck[i][1] === 'Spade'){
                emoji = '♠️';
                front.style.color = 'black';
            }else if (deck[i][1] === 'Heart'){
                emoji = '♥️';
                front.style.color = 'red';
            }else if (deck[i][1] === 'Club'){
                emoji = '♣️';
                front.style.color = 'black'
            }
                front.innerText = (deck[i][0] + ' ' + emoji);
                front.className = 'front';
                back.className = 'back';
                //console.log(card.innerText);
                //console.log(card);
                
                tempArray[i].appendChild(front);
                tempArray[i].appendChild(back);
    }
}

//building dom / draggable abilities with jquery
$(function() {
    $('.whole-card').draggable();
});

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



