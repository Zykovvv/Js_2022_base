// Function Declaration - объявление функции
// Fucktion Expression - функциональное выражение
// Arrow Funcktion - стрелочная функция

// function showMessage () {
//     console.log ("hello");
// }

// showMessage ();

// let user;

// function greetUser (name = "гость") {
//     console.log (`Привет, ${name}`);
// }

// greetUser (user);

// const user = {
//     name: 'vasya',
//     age: 18 ,
// };


// // Function Declaration
// function checkAccess (age) {
//     if (age < 18) {
//         showDeniedMsg ();
//     }else {
//         showAllowedMsg ();
//     }
// } 

// // Function Expression
// const showAllowedMsg = function () {
//     console.log ("Доступ разрешен");
// }
// function showDeniedMsg () {
//     console.log ("Доступ запрещен")
// }

// checkAccess (user.age);

// Директива return

// function calcValue (a, b) {
//     return a + b;
// }

// const result = calcValue (3, 5);

// console.log (result);


// const user = {
//     name: "Vasya",
// }

// const greetMesg = "Привет";


// function getName (user) {
//     return user.name || "гость"
// }

// function sayHi(text, name = getName ()){
//     console.log (`${text}, ${name}!`)
// }

// sayHi (greetMesg, getName (user));

// Функция используемая внутри функции называется callback

// const name = "vasya";

// function showMsg() {
//     console.log (name);
// }

// showMsg ();


// let user

// function sayHi (name = "гость"){
//     console.log (`Привет ${user}`)
// }

// sayHi (user)

// const calcPower = function (num, power = 1){
//     return num ** power;
// }

// const result = calcPower ("2", 3);

// console.log (result);


// const myArray = [1];

// const calcAverageValue = function (arr){
//     if (myArray.length){
//         return "Пустой массив";
//     }
//     let sum = 0;

//     for (let i = 0; i < myArray.length; i++){
//         sum += arr [i];
//     }

//     return sum / arr.length;
// };

// console.log (calcAverageValue(myArray));


// ARROW FUNCTIONS

// function calcValue (a, b) {
//     const result = a + b;
//     return result;
// }

// const calcValue = (a, b) => {
//     return a + b;
// }
// const result  = calcValue (3,5);
// console.log ()

// PRACTICE

// 1

// const msgsAmount = 10;
// const message = "Сообщение";

// const showMessage = (msg, count) => {
//     for (let i = 1; i <= count; i++){
//     console.log(`${msg} ${i}`);
//     }
// };

// showMessage(message, msgsAmount);

// 2
// const myChar = "с";

// const isMyCharVowel = (char) => {
//     const vowels = "аеёиоуыэюя";

//     if (vowels.includes(char)) {
//         return "Гласная";
//     }
//     return "Не гласная"
// };

// console.log (isMyCharVowel(myChar));

