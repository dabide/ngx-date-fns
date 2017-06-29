import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { AddQuartersPipe } from './add-quarters.pipe';

describe('AddQuartersPipe', () => {
  let pipe: AddQuartersPipe;

  beforeEach(() => pipe = new AddQuartersPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, AddQuartersPipe.NO_ARGS_ERROR);
  });

  it('should add 1 quarter to 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 1))
      .to.eql(new Date(2014, 11, 1));
  });
});
