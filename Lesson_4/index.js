// const myVar1 = 10;
// const myVar2 = 10;

// if (myVar1 > myVar2){
//     console.log (`${myVar1}) больше ${myVar2}`);
// } else {
//     console.log ("end");
// }

// let result = myVar1 > myVar2 ? console.log (true) : console.log(false);
// //Конструкция используется на минимальном уровне разветвления
// //Тернарный оператор


//Конструкция Switch

const userRole = 'admin';

switch (userRole) {
    case 'student' :
        console.log ('Текущий пользователь = student');
        break;
    case 'admin':
        console.log ('Текущий пользователь = admin ');
        break;
        case 'normal_user':
            console.log ('Текущий пользователь = normal_user');
            break;
            default:
                console.log ('Нет такого типа пользователя');
                break;
}
