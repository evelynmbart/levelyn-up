# Memory Game Rules:

- first make the cardImages array with src and respective values
- shuffleCards() - duplicating, shuffling, and assigning random Id's - add to new game button
  -set the turns to 0
- create the Card component using a .map function instead of rewriting code
- handleClicks
  -handleChoice
  -resetTurns (this uses prevTurns!)
  -useEffect -> this relates to the comparison of two cards being chosen
- give a match property in cardImages (this uses .map! and prevCards)
  - update state
    -check if cards match
- flipping cards animation/functionality (this uses state!)
- disable more than 2 cards being flipped over (this uses state!)
- new game automatically (uses a new useEffect function!)
- winning end credits!
