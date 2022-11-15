Game choice: Solitaire. 

Psuedocode: 

1. Create 1 Class of Cards with 4 Objects(Spades, Hearts, Clubs, Diamonds) - populate these with their correct attributes. 
2. Create 1 Class of Winning Stacks with 4 objects with the win parameters set into them. 

3. A function checks the win parameter - if its false it loads and shuffles a card deck (with no jokers) randomly.
4. The deck is dealt on the game board. The board is set up with 7 columns of cards. Each column contains one more card than the last starting at 1 and going to 7. The last card in each column is turned upwards so the user can see it and the rest in each column are facing downwards. The remaining cards in the deck stay in a pile. 

5. Next the program will wait for user input and when the user either 
    - a.) drags a card or 
    - b.) pulls a card from the extra pile it will check the 'dragged card' against the 'set card' to see if the 'dragged card' is within 1 rank of the 'set card' and is an opposite color of the 'set card'. 

The other option is that the user can begin building the 4 decks of common suit - in this case the function will 
    - a.) check if the 'dragged card' is either an ACE to begin building a stack or within 1 rank of the 'set card' below it and 
    - b.) if the 'dragged card' is the exact same suit as the cards already in the stack. 
6. This loop will repeat until one of two events happen: 
     1 . The user can make no more moves and they have lost the game. 
     2. The user has made 4 complete stacks of cards and the game is won. 
7. If it is a win a function will congratulate the player and offer them their time score and if they would like to play gain. The function will store the high score. 
8. If it is a loss the function will ask the user if they would like to play again. 
