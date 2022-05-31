// const myVar1 = 5;
// const myVar2 = 10;


// if (myVar1 > myVar2) {
//     console.log (`Верно! ${myVar1} больше ${myVar2}`);
// } else if (myVar1 < myVar2 ) {
//     console.log (`${myVar1} меньше ${myVar2}`);
// } else {
//     console.log ("end");
// }

// Тернарный оператор ?
// let result = myVar1 > myVar2 ? console.log (true) : console.log (false);
//Конструкция используется при небольшом уровне разветвления

// Конструкция Switch

// const userRole = "adm1111in";

// switch(userRole) {
//     case "student" :
//         console.log("Текущий пользователь - student");
//         break;
//     case "admin" :
//         console.log ("Текущий пользователь - admin");
//         break;
//     case "normal_user":
//         console.log("Текущий пользователь - normal_user") 
//         break;  
//         default :
//         console.log("Нет такого типа пользователя") 
//         break;
// }

// Логические операторы
// && - логическое И
// || - логическое ИЛИ
// ! - логическое НЕ

// console.log (0 || 0 || "");
// console.log (1 && 2 && "строка" && 0 && 1);

// && - возвращает первое значение False
// || - возвращает первое значение true

// console.log((1 && 2) || (4 && 0));

// Логическое НЕ

// 1. Js приводит значене после ! к булеву типу
// 2. ! меняет полученный тип на противоположный

// console.log (null || 0 || "" || undefined);
// console.log ("яблоко" && true && null && 1);
// console.log (0|| true && "false" || null);
// console.log (0 && true || "false" && null);
// console.log (!0&& !!1);
// console.log !(null || !"apelsin" && false);


// const currentTemp = 200;

// if(currentTemp < -30){
//     console.log("Оставайтесь дома");
// } else if (currentTemp > -30 && currentTemp <= -10){
//     console.log("Сегодня холодно");
// } else if (currentTemp > -10 && currentTemp < +5){
//     console.log("Не холодно");
// } else if (currentTemp > 5 && currentTemp <= 15){
//     console.log ("Тепло");
// } else if (currentTemp > 15 && currentTemp <= 25){
//     console.log ("Жарко");
// } else {
//     console.log("Пекло");
// }

// Циклы

// let myVar = 0;

// while (true){
//     console.log (myVar += 1);
// }

// let myVar = 0;

// do {
//     console.log((myVar += 1));
// } while (false);

// FOR

// let myVar = 10;

// for (let i = 0; i <= myVar; i++){
//     console.log(i);
// }

// const myVar = "строка";

// console.log (Object.getPrototypeOf(myVar));
// console.log(myVar);

// const myArray = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < myArray.length; i++ ) {
//     const firstArrayElement = myArray[i].toString ();
//     if(
//     firstArrayElement [0] === "1" || 
//     firstArrayElement [0] === "2" ||
//     firstArrayElement [0] === "5"
//     ) {
//         console.log(myArray[i]);
//     }
// }

// const test = true;

// if (test) {
//     console.log("Верно")
// } else {
//     console.log("Неверно");
// }


// const myString = "12345";

// switch (myString [0]) {
//     case "1" :
//         console.log("Да")
//         break;
//     case "2" :
//         console.log ("Да")
//         break;
//     case "3" :
//         console.log ("Да")
//         break;
//     default :
//         console.log("Нет")
//         break;
// }
