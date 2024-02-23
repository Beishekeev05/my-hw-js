
// Задача №1

function show(alert) {
    alert("Кандайсын")
}
show(alert)

document.bgColor = "aqua";

// Задача №2

function numbers(a, b) {
    return a + b;
}
console.log(numbers(3, 5))

// Задача №3

let doubling = function (number, vara) {
    return number * vara;
}
console.log(doubling(6, 5));

// Задача №4

function greetUser(name) {
    alert(`Привет ${name} !`);
}
greetUser("Сема");

// Задача №5

const add = (a, b) => a + b;

console.log(add("Бугун кун ", "Ыссыккы"));

// Задача №6

function examination(numbers) {
    if (numbers % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(examination(4));

// Задача №7

function bigNumber(params1, params2) {
    if (params1 === params2) {
        return "Алар окшош брат "
    }
    let ifElse = params1 >= params2 ? `${params1} Чонураак ${params2}` : `${params2} Кичекей ${params1}`;
    return ifElse;
}
console.log(bigNumber(44, 44));

// Задача №8

function getLength(str) {

    return str.length;

}
let myString = "Hello" + "World!";

let length = getLength(myString);

console.log(length); 

// Задача №9

function greet(name, age) {
    console.log(`Привет, ${name}! Тебе ${age} лет.`);
}

greet("Сыймык", 19);

// Задача №10

function calculate(num1, num2) {
    if (num1 > 10 && num2 > 10) {
        return num1 + num2;
    } else {
        return num1 - num2;
    }
}

console.log(calculate(15, 20));
 
// Калькулятор

let number = +prompt("Ведите число ")
let operator = prompt(" Ведите значение + / - *")
let numberOne = +prompt("Ведите второе число ")

function calc(number, operator, numberOne) {

    if (operator === "+") {
        alert(number + numberOne)
    }
    else if (numberOne === 0) {
        alert("Не правильный ввод")
    }
    else if (operator === "-") {
        alert(number - numberOne);
    }
    else if (number === 0) {
        alert("Не правильный ввод")
    }
    else if (operator === "*") {
        alert(number * numberOne);
    }
    else if (operator === "/") {
        alert(number / numberOne);
    }
    else {
        alert(NaN);
    }
}
calc(number, operator, numberOne)
