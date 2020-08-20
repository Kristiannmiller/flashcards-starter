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
    const card3 = new Card(3, 'What kind of bear is best?', ['panda bear', 'black bear', 'that\'s a ridiculous question'], 'black bear');

    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should update the turn counter', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(3, 'What kind of bear is best?', ['panda bear', 'black bear', 'that\'s a ridiculous question'], 'black bear');

    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);
    round.takeTurn()

    expect(round.turns).to.equal(1);
  });

  it('should create a new instance of Turn', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(3, 'What kind of bear is best?', ['panda bear', 'black bear', 'that\'s a ridiculous question'], 'black bear');

    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);
    round.takeTurn('object')

    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it('should establish the result of the user guess', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(3, 'What kind of bear is best?', ['panda bear', 'black bear', 'that\'s a ridiculous question'], 'black bear');

    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);

    expect(round.takeTurn('object')).to.equal('correct!');
    expect(round.turns).to.equal(1)
    expect(round.takeTurn('pug')).to.equal('incorrect!');
    expect(round.turns).to.equal(2)
  });

  it('should return the percentage of correct guesses', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(3, 'What kind of bear is best?', ['panda bear', 'black bear', 'that\'s a ridiculous question'], 'black bear');
    const card4 = new Card(4, 'what organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')

    const deck = new Deck([card1, card2, card3, card4])
    const round = new Round(deck);
    round.takeTurn('object');
    round.takeTurn('pug')
    round.takeTurn('black bear')
    round.takeTurn('spleen')
    expect(round.incorrectGuesses).to.deep.equal([2, 4])
    expect(round.calculatePercentCorrect()).to.equal(50)
  })

  it('should print the results to the round', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(3, 'What kind of bear is best?', ['panda bear', 'black bear', 'that\'s a ridiculous question'], 'black bear');
    const card4 = new Card(4, 'what organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')

    const deck = new Deck([card1, card2, card3, card4])
    const round = new Round(deck);
    round.takeTurn('object');
    round.takeTurn('pug')
    round.takeTurn('black bear')
    round.takeTurn('spleen')
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  })
});
