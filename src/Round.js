const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentTurn = {};
    this.incorrectGuesses = [];
  };
  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.deck.cards[this.turns])
    this.currentTurn = currentTurn
    currentTurn.evaluateGuess()
    if(!currentTurn.result) {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    this.turns++
    return currentTurn.giveFeedback()
  }
  calculatePercentCorrect() {
    return this.incorrectGuesses.length / this.deck.cards.length * 100
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
};
module.exports = Round;
