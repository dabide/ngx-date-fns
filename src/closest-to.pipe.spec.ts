import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { ClosestToPipe } from './closest-to.pipe';

describe('ClosestToPipe', () => {
  var pipe: ClosestToPipe;

  beforeEach(() => pipe = new ClosestToPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, ClosestToPipe.NO_ARGS_ERROR);
  });

  it('should throw when less than two dates are provided', () => {
      expect(() => pipe.transform(new Date(), []))
        .to.throw(Error, ClosestToPipe.NO_ARGS_ERROR);
      expect(() => pipe.transform(new Date(), [new Date()]))
        .to.throw(Error, ClosestToPipe.NO_ARGS_ERROR);
  });

  it('should return the closest date to the two given dates', () => {
    expect(pipe.transform(new Date(2012, 1, 1), [new Date(2012, 1, 29), new Date(2011, 1, 29)]))
      .to.eql(new Date(2012, 1, 29));
  });

  it('should return the closest date to the many given dates', () => {
    const dates = [new Date(2010, 5, 9), new Date(2012, 1, 29), new Date(2011, 1, 29), new Date(2016, 2, 20)];
    expect(pipe.transform(new Date(2011, 2, 2), dates))
      .to.eql(new Date(2011, 1, 29));
  });
});
