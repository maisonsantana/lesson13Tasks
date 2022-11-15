"use strict";

// 1. Написати функцію, яка запитує в користувача число з діапазону до тих пір, доки він його не введе
// функція брудна, приймає початок і кінець діапазону, а повертає виключно коректне число числового типу!!!!!!

function userValue(num1, num2) {
  while (true) {
    const userNum = prompt("enter you number");
    if (isNaN(Number(userNum)) ||userNum === null ||userNum === "" ||userNum === " ") {
      continue;
    } else if (userNum >= num1 && userNum <= num2) {
      return Number(userNum);
    }
  }
}
console.log(userValue(16, 66));

// ----------------------------------------------

// 2. Написати скрипт, який виводить числа (числа повинні бути парними і кратними 9) з діапазону від 0 до 100 у зворотньому порядку.

const num1 = 0;
const num2 = 100;

for (let number = num2; number >= num1; number--) {
  if (number % 2 === 0 && number % 9 === 0) {
    console.log(number);
  }
}

// ----------------------------------------------

// 3. Створити функцію конструктор, яка описує користувача:
//    -ім'я
//    -прізвище
//    -вік
//    - метод, який логує ім'я та прізвище разом

function User(firstName, lastName, age) {
  this.firstName = firstName, 
  this.lastName = lastName, 
  this.age = age,
  this.getFullName = function () {
    console.log(this.firstName + " " + this.lastName);
  };
}
const infoUser = new User("John", "Doe", 33);
console.log(infoUser);
infoUser.getFullName();