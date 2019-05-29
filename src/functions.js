export function someFunction(input) {
  return input;
}

// var validArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//constructor
export function Sudoku() {
  this.board = [];
}

Sudoku.prototype.fillBoard = function(){
  for(var i = 0; i < 9; i++){
    for(var j= 0; j < 9; j++){
      this.board.push(j + 1);
    }
  }
};

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
};

//function create rows
Sudoku.prototype.getRows = function(){
  var rows = [];
  var row = [];
  var counter = 0;
  this.fillBoard();

  while(counter < 81){
    for(var i=0; i<9; i++){
      row.push(this.board[counter]);
      counter++;
    }
    rows.push(row);
    row = [];
  }
  return rows;
};

//function create columns
Sudoku.prototype.getColumns = function(){
  var cols = [];
  var col = [];
  this.fillBoard();

  for(var i = 0; i < 9; i++){
    for(var j = i; j < 81; j += 9){
      col.push(this.board[j]);
    }
    cols.push(col);
    col = [];
  }
  return cols;
};

//create boxes
Sudoku.prototype.getBoxes = function(){
  var squares = [];
  var square = [];
  this.fillBoard();
  // var counter = 1;

  for(var j = 0; j< 81; j += 3){
    for(var i = j; i < 3; i++) {
      square.push(this.board[j]);
      square.push(this.board[j+9]);
      square.push(this.board[j+18]);
    }
    squares.push(square);
    square = [];
    if(j % 27 == 0){
      j+=27;
    }
  }
  return squares;
};