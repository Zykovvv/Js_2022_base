// const myConst = "Привет Вася";

// console.log (myConst.split("").join ("ororos"));

// const goToThePlace = (place) => {
//     console.log (`Иду в ${place}! йоу`);
// };

// const user = {
//     name: "Ivan",
//     age: 18,
//     goToUniversity: () => goToThePlace ("Универ"),
// };

// user.goToUniversity();

// const nameKey = "name";

// const user = {
//     [nameKey]: "Ivan",
//     age: 18,
// };


// console.log (user.age);

// const user = {
//     name: "Ivan",
//     age: 18,
// };

// user.name = "Petya";

// delete user.age;

// console.log (user);


// Практика
// Создайте объект описывающий ваш любимый фильм.
// Объект должен содержать св-ва с названием фильма, дата выпуска, именем режисера и страной выпуска.

// const myFavoriteFilm = {
//     title: "Reseirvoir Dogs",
//     year: 1992,
//     director: "Q.Tarantino",
//     country: "USA",
// };

// // Добавить св-во содержащее значение выручки в прокате

// myFavoriteFilm. profit = "$2,8 mln";

// // Добавить метод который будет выводить название фильма в консоль

// myFavoriteFilm.showTitle = () => console.log (myFavoriteFilm.title)
// myFavoriteFilm.showTitle ();

// // Удалить св-во содержащее год выпуска

// delete myFavoriteFilm.year;

// // console.log(myFavoriteFilm);


// const myNumber = 10.326123;

// console.log (Object.getPrototypeOf(myNumber));


// console.log (myNumber.toFixed(2));


// myNumber = 23e4;
// console.log(myNumber);

// ParseInt - для целых чисел
// ParseFloat - для дробных чисел

// console.log(parseInt("12345a23"));
// console.log(parseFloat("12.345a23"));

// const myNumber = 123;

// // if(typeof myNumber === "number") console.log ("Число!");
// if(!isNaN(myNumber)) console.log ("Число!")


// const myArray = [1, 4, 10, 20, 14, 15];

// console.log(Math.max(...myArray)); // ...myArray тоже самое, что 1, 4, 10, 20

// const myString = "Вася пошел в класс и сказал: \n \'Привет всем'\ "
// console.log(myString)

// const myName = "    Vsya";

// console.log (myName);
// console.log (myName.trim());// убирает пробелы по краям строки


// const myString = "Widjet with id";

// const idIndex = myString.indexOf ("id");
// const newString = myString.slice(idIndex);

// console.log (newString);


