const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () => {

  it('should keep track of the current round', () => {
    const game = new Game();
    expect(game.currentRound).to.be.aninstanceof(Round)
  });
});
