const fs = require("fs");

function read() {
  let sss = fs.readFileSync("./puzzles.txt","utf8").split("\n");
  console.log(sss)
}
read();

let getRandomInteger = () => {
  let sudokuNumber = Math.round(Math.random() * (5 -1 + 1) +1);
  return (sudokuNumber);
} 

// function getCoord () {
//   let array = read();
//   let newArr =[];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if(array[i][j] === "-") {
//         newArr.push([i, j]);
//       }  
//     } 
//   }
//   return newArr;
// }
//console.log (getCoord());

function getCoord () {
  let array = read();
  let newArr =[];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[i][j] === "-") {
        a=([i, j]);
        return a;
      }  
    } 
  }
  return null;
}
console.log (getCoord());


function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
