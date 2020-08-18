const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Round', () => {

  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });
});
