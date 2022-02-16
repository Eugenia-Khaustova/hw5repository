"use strict";

// 1. Написать функцию searchString(originalStr, str) . Данная функция должна
// проверять находится ли подстрока str в основной строке originalStr и
// возвращать булевое значение
function searchString(originalStr, str) {
  return originalStr.includes(str);
}

console.log(searchString("Everything", "every"));
console.log(searchString("Everything", "Every"));

// 2. Написать функцию capitalizeFirstLetter , которая будет
// принимать строку. Функция возвращает строку, где первый символ
// будет с заглавной буквы

function capitalizeFirstLetter(str) {
  let stringArray = str.split("");
  stringArray[0] = stringArray[0].toUpperCase();
  stringArray = stringArray.join("");
  return stringArray;
}

console.log(capitalizeFirstLetter("hello")); // Hello
console.log(capitalizeFirstLetter("HELLO")); // HELLO
console.log(capitalizeFirstLetter("hElLo")); // HElLo

// 3. Создайте функцию truncate(str, maxlength), которая проверяет длину строки
// str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы
// её длина стала равна maxlength. Результатом функции должна быть та же строка,
// если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    // return str.substr(0, maxlength) + "...";
    return `${str.substr(0, maxlength)}...`;
  } else {
    return str;
  }
}

console.log(truncate("Hello world", 5)); // Hello...
console.log(truncate("Hello world", 25)); // Hello world

// 4. Есть массив студентов. Для реализации используем методы массивов.
// Написать две функции:
//     Должны вывести массив студентов и средний бал каждого
//     Должна вывести средний бал по всем студентам
// На выходе мы должны получить новый массив (после выполнения первой функции!)

function calcEachAverage(arr) {
  let copyArr = arr.map((item) => {
    return Object.assign({}, item, { averageMark: 0 });
  });
  copyArr.forEach((item) => {
    item.averageMark =
      item.marks.reduce((sum, current) => sum + current, 0) / item.marks.length;
  });
  return copyArr;
}

function calcTotalAverage(arr) {
  let sum = 0;
  let length = 0;
  arr.forEach((item) => {
    sum += item.marks.reduce((sum, current) => sum + current, 0);
    length += item.marks.length;
  });
  return sum / length;
}

const students = [
  {
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];
console.log(calcEachAverage(students));
console.log(calcTotalAverage(students));

// 5. Данн массив vehicles. Необходимо написать код, который реализует подсчет
// средней цены автомобилей типа SUV:
// Обратите внимание, что поле type может быть написано в любом регистре символов (suv, SUV).
// Примечание: для решения задачи вам нужно будет использовать методы массивов (а не обычные циклы)

function calcAveragePrice(arr) {
  let suvPrice = 0;
  let suvArray = arr.filter((item) => item.type.toLowerCase() == "suv");
  // suvArray.forEach((el) => {
  //   suvPrice = el.price.reduce((sum, current) => sum + current, 0);
  // });
  suvPrice = suvArray.reduce((sum, currrent) => sum + currrent.price, 0);
  return suvPrice / suvArray.length;
}

const vehicles = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Toyota", model: "Sequoia", type: "SUV", price: 45560 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Ford", model: "Explorer", type: "SUV", price: 31660 },
];

console.log(calcAveragePrice(vehicles));

// 6. У нас есть массив чисел arr. Нужно получить отсортированную копию, но
// оставить arr неизменённым. Создайте функцию copySorted(arr), которая будет
// возвращать такую копию.
// Примечание: есть несколько вариантов решения этой задачи.
// Некоторые из них мы еще не разбирали. Можете написать несколько вариантов реализации.

function copySorted(arr) {
  return arr.slice().sort((a, b) => a - b);
}

function spreadSorted(arr) {
  let spreadCopyArr = [...arr];
  return spreadCopyArr.sort((a, b) => a - b);
}

function arrayFromSorted(arr) {
  let arrayFromCopyArr = Array.from(arr);
  return arrayFromCopyArr.sort((a, b) => a - b);
}

let arr = [10, 20, 3, 4, 0, 99, 97];
let sorted = copySorted(arr);
let spreadSortedArr = spreadSorted(arr);
let arrayFromSortedArr = arrayFromSorted(arr);

console.log(arr); // [10, 20, 3, 4, 0, 99, 97] - массив не должен измениться!
console.log(sorted); // [0, 3, 4, 10, 20, 97, 99]
console.log(spreadSortedArr);
console.log(arrayFromSortedArr);

// 7. Напишите функцию getKeysCount(obj), которая возвращает количество свойств
// объекта. Постарайтесь сделать код как можно короче.
// Примечание: идеальное решение может быть в 1 строку

let getKeysCount = (obj) => {
  return Object.keys(obj).length;
};

let user = {
  name: "John",
  lastname: "Smith",
  age: "21",
  city: "London",
};

console.log(getKeysCount(user));
console.log(getKeysCount({ name: "John" })); // 1
console.log(getKeysCount({ name: "John", age: 22 })); // 2
console.log(getKeysCount({ name: "John", salary: null })); // 2
