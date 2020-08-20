class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
  };
  returnCurrentCard() {
    return this.deck.cards[this.turn]
  }
  takeTurn() {
    this.turn++
  }
};
module.exports = Round;
