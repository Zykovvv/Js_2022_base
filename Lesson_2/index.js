//Примитивные типы данных:

//Number
//console.log(1/0);
//console.log(typeof NaN);

//Оператор typeof показывает тип данных, указанный после typeof

//String
//const myString = 'Строка';
//const anotherString = "Строка:'String' ";   // \'text\' это экранирование
//const tempLaterString = `шаблонна строка ${anotherString}`

//console.log(tempLaterString);

//Boolean
//Принимает только два значения True or False

//const isAdmin = true;
//const isUser = false;

//Null
// представляет собой Ничего, пусто или значение неизвестно

//const enptVariable = null;


//Undefined
//Значение не было присвоено
//const userName;
//console.log(userName);


//Непримитивные типы данных
//Object

//Словарь Multitrain,можно найти значение слов на английском

// const somename = 'Andrew';

// const user ={
//     name: 'Maxim',
//     lastName: 'Zykov',
//     age: 25,
//     citizenship: 'Russia',
// };

//Оператор typeof

// console.log(typeof null);
// typeof null - всегда object, ошибка языка JS



//Преобразование типов данных
//Строковое преобразование

// const myVar= true;
// const myVarToString = String(myVar);
// console.log (typeof myVarToString);


//Численное преобразование

// const myVar = '123';
// const myVarToNumber = +myVar;
// console.log (typeof myVarToNumber);

//Логическое преобразование

// const myVar = 1;
// ! можно воспринимать как частицу не
// !(Преобразовыввает у Булину и меняет на противовположный) !(Второй возвращает к начальному виду)
// console.log (!!myVar);

//Математические операторы
//Бинарный плюс 
//При сложении строки и числа, все значения приводятся к строке


// const myNumber = 1;
// const newNumber = 2;
// const myString = 'Строка';

// console.log (myNumber + myString);



//Сравнение строк

// const string1 = 'Строка';
// const string2 = 'Солнце';

// console.log (string1 > string2);
// //unicode

// const userTypes = {
//     admin: 'admin',
//     user: 'user',
//     teacher: 'teacher',
//     contentManager: 'contentManager',
// };

// const serverDataUserType = 'user';

// if (serverDataUserType === userTypes.admin){
//     console.log ('Показать весь контент');
// }else {
//     console.log ('Показать ограниченный контент');
// }

//Практика


