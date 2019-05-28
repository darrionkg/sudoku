import { Sudoku } from './../src/functions.js';


describe('Sudoku', function() {
  var sudoku;
  var testArrayValid = [2,1,3,4,5,7,6,9,8];
  var testArrayInvalid = [1,3,1,4,5,7,6,9,8];
  
  beforeEach(function(){
    sudoku = new Sudoku();
  });

  it('should test for a valid array of numbers', function() {
    expect(sudoku.isValidArray(testArrayValid)).toEqual(true);
  });

  it('should test for an invalid array of numbers', function() {
    expect(sudoku.isValidArray(testArrayInvalid)).toEqual(false);
  });

  it('tests for exactly 9 values', function() {
    expect(sudoku.arrayHasNineNumbers(testArrayValid)).toEqual(true);
  });

  it('will populate the board', function() {
    
  });

  // it('will build rows of the board', function() {

  // });

  // it('will build 3x3 boxesof the board', function() {

  // });
});

