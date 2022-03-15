// Практический материал к презентации №1

// Вывести в терминал строку “Hello World!”
console.log("Hello World");

// Создать переменную для каждого типа данных
const name = "Maxim"; //string
const age = 25; //number
const isAdmin = true; //boolean
// const userName = "" ; //undefined 
const bigInt = 1234567890123456789012345678901234567890n; //BigInt
const numberMyCar = null; //null
const user = {
    name: "Maxim",
    age: 25,
}

// Вывести в консоль редактора кода созданные переменные
console.log (name);
console.log (age);
console.log (isAdmin);
// console.log (userName);
console.log (bigInt);
console.log (numberMyCar);
console.log (user);

// Вывести ее тип через оператор typeof и функцию typeof
console.log (typeof name);
console.log (typeof age);
console.log (typeof isAdmin);
// console.log (userName);
console.log (typeof bigInt);
console.log (typeof numberMyCar);
console.log (typeof user);

// Попробовать изменить переменную объявленную через const
//const name = "Andrew"; //ошибка

// Попробовать изменить переменную с типом object объявленную через const
// const user = {
//     name: "Andrew",
//     age: 27,
// }
// console.log (user);  //ошибка

// Попробовать изменить переменную с типом object объявленную через let
// let lastUser = {
//     name: 'Ivan',
//     age: 24,
// }

// let lastUser = {
//     name: 'Vano',
//     age: 55,
// }

//Ошибка
// console.log (lastUser)

// Попробовать изменить переменную с типом object объявленную через var
var lastUser = {
    name: 'Ivan',
    age: 24,
}

var lastUser = {
    name: 'Vano',
    age: 42,
}

console.log (lastUser)
// Установить редактор кода VS Code 
// Ознакомиться с системой контроля версий GitHub (завести аккаунт)
