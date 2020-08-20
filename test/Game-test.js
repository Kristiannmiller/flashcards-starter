const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Game', () => {

  it('should keep track of the current round', () => {
    const game = new Game();
    game.start()
    expect(game.currentRound).to.be.an.instanceof(Round)
  });
});
