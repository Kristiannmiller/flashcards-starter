const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () => {

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should know the current card', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(3, 'What kind of bear is best?', ['panda bear', 'balck bear', 'that\'s a ridiculous question'], 'black bear');

    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should update the turn counter', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(3, 'What kind of bear is best?', ['panda bear', 'balck bear', 'that\'s a ridiculous question'], 'black bear');

    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);
    round.takeTurn()

    expect(round.turn).to.equal(1);
  });

  it('should create a new instance of Turn', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(3, 'What kind of bear is best?', ['panda bear', 'balck bear', 'that\'s a ridiculous question'], 'black bear');

    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);
    round.takeTurn('object')

    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

});
