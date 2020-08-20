const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentTurn = {};
  };
  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.deck.cards[this.turns])
    this.currentTurn = currentTurn
    console.log(currentTurn.guess);
    currentTurn.evaluateGuess()
    this.turns++
    return currentTurn.giveFeedback()

  }
};
module.exports = Round;
