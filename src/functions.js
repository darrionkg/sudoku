export function someFunction(input) {
  return input;
}

// var validArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//constructor
export function Sudoku() {
  this.board = [];
}

//checks input for valid arrays
Sudoku.prototype.isValidArray = function(array){
  // array.sort()
  var isValid = true;
  array.sort((a,b) => a-b);
  for(var i = 0; i < array.length; i++) {
    if(array[i] != (i + 1)){
      isValid = false;
      break;
    }
  }
  return isValid;
};

Sudoku.prototype.arrayHasNineNumbers = function(array) {
  return (array.length === 9);
}
//function create rows
//create columns
//create boxes