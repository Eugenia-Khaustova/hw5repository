"use strict";

// 1. Написать функцию searchString(originalStr, str) . Данная функция должна
// проверять находится ли подстрока str в основной строке originalStr и
// возвращать булевое значение
let result;
function searchString(originalStr, str) {
  if (originalStr.includes(str) === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(searchString("Everything", "every"))
console.log(searchString("Everything", "Every"))


// 2. Написать функцию capitalizeFirstLetter , которая будет 
// принимать строку. Функция возвращает строку, где первый символ 
// будет с заглавной буквы

let capResult
let lowResult
function capitalizeFirstLetter (str) {
    let stringArray = str.split("")
    if(stringArray[0]) {
        stringArray[0] = stringArray[0].toUpperCase()
    }
    stringArray = stringArray.join("")
    return stringArray
} 

console.log(capitalizeFirstLetter("eleven"))