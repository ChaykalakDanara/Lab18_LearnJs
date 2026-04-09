console.log("Hello, JavaScript!")

let age = 20;
let name = "Danara";
let isStudent = true;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is student: ", isStudent);

let value = 10;
console.log(value);
value = "Терперь это строка";
console.log(value);
value = true;
console.log(value);

let userName = "Данара";
console.log(`Привет, ${userName}!`)
let price = 99.99;
let temperature = -15;
let infinity = 1/0;
let notANumber = 0/0;
console.log(0.1 + 0.2);

let bigNumber = 9007199254740991n;
let huge = BigInt("123456789012345678901234567890");

let isAlive = true;
let isWorking = false;
let isAdult = age >= 18;

let x;
let y = undefined;

let person = {
    name: "Станислав",
    age: 30,
    isStudent: false,
    sayHello: function () {
        console.log("Привет!");
    }
};
console.log(person.name);

let fruits = ["яблоко","банан","апельсин"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["текст", 42, true, null];

function sum(a, b){
    return a + b;
}
let multiply = function (x, y) {
    return x * y;
}
console.log(sum(5,3));

let now = new Date();
let birthday = new Date("1995-12-17");

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(10 + "5");
console.log("10" - 5);


const numbersArray = [1, 2, 3];
numbersArray[0] = 10;
console.log(numbersArray);

// const persons = { name: "Denis", age: 18 };
// persons.age = 50;
// persons.city = "Volgograd";
// console.log(persons);

// person = {name: "Stas"}

console.log(typeof "текст");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let numberX = null;
console.log(numberX === null);

let newPrice = 100;
console.log(newPrice, typeof newPrice);

newPrice = "сто рублей";
console.log(newPrice, typeof newPrice);

let num = 42;
let str = String(num); 
let str2 = num.toString();
let str3 = "" + num;

let strNum = "123";
let int = Number(strNum); 
let int2 = parseInt("42.5"); 
let float = parseFloat("3.14"); 
let int3 = +"99"; 

let bool1 = Boolean(1); 
let bool2 = !!1;
let bool3 = Boolean(0); 
let bool4 = Boolean(""); 
console.log(Number("123"));
console.log(String(123));
console.log(Boolean(1));

console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log(true + 1);
console.log(false + 1);
console.log(null + 1);
console.log(undefined + 1);

// 11.4 
let a2 = 8;
let b2 = 4;

console.log("Сложение (a2 + b2):", a2 + b2);
console.log("Умножение (a2 * b2):", a2 * b2);

let yourAge = 18;

if (yourAge >= 18) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}
// 12.3
let temp = 15;
if (temp < 0) {
    console.log("Холодно");
} else if (temp >= 0 && temp <= 10) {
    console.log("Прохладно");
} else {
    console.log("Тепло");
}
//12.4
if (isStudent && age < 25) {
    console.log("Доступна студенческая скидка");
}
// пр №2
let isLoggedIn = true;
let isAdmin = true;
if (isLoggedIn && isAdmin) {
    console.log("Полный доступ");
} else if (isLoggedIn && !isAdmin) {
    console.log("Ограниченный доступ");
} else {
    console.log("Доступ запрещён");
}
// Вар 2:
// let isLoggedIn = true;
// let isAdmin = false;
// if (isLoggedIn && isAdmin) {
//     console.log("Полный доступ");
// } else if (isLoggedIn && !isAdmin) {
//     console.log("Ограниченный доступ");
// } else {
//     console.log("Доступ запрещён");
// }
// Вар 3:
// let isLoggedIn = false;
// let isAdmin = false;
// if (isLoggedIn && isAdmin) {
//     console.log("Полный доступ");
// } else if (isLoggedIn && !isAdmin) {
//     console.log("Ограниченный доступ");
// } else {
//     console.log("Доступ запрещён");
// }
// пр №3
let a3 = 10;
let b3 = "10";
console.log( a3 == b3);   
console.log( a3 === b3); 
// 12.7
let message = age >= 18 ? "Своевременный" : "Несовременный";
console.log(message);
//12.8
let day = 3;
switch (day) {
    case 1: console.log("Понедельник"); break;
    case 2: console.log("Вторник"); break;
    case 3: console.log("Среда"); break;
    default: console.log("Неизвестный день");
}
//пр №4
let monthNumber;
switch (monthNumber) {
    case 1: console.log("Январь"); break;
    case 2: console.log("Февраль"); break;
    case 3: console.log("Март"); break;
    case 4: console.log("Апрель"); break;
    case 5: console.log("Май"); break;
    case 6: console.log("Июнь"); break;
    case 7: console.log("Июль"); break;
    case 8: console.log("Август"); break;
    case 9: console.log("Сентябрь"); break;
    case 10: console.log("Октябрь"); break;
    case 11: console.log("Ноябрь"); break;
    case 12: console.log("Декабрь"); break;
    default: console.log("Неверный номер месяца");
}