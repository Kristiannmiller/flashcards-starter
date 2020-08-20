const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.currentTurn = {};
  };
  returnCurrentCard() {
    return this.deck.cards[this.turn]
  }
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.deck.cards[this.turn])
    this.currentTurn = currentTurn
    this.turn++
  }
};
module.exports = Round;
