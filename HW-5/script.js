// Задача №1, Создал обьект 

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 1996
}
console.log(car);

// Задача №2, Вывел ключевое слова на кансоль

console.log(car.year);

// Задача №3, Изменил значению, ключевого словы "year"

car.year = 2009

// Задача №4, Добавил новый ключевой слова

car.color = "gray";

// Задача №5, удалил ключевое слова 'model'

delete car.model;

// Задача №6, Создал метод !n // Тут car.model вернет нам undefaind потомушто мы удалили ключевое слова model !!!!!!!

function displayInfo() {
    return `Car: ${car.brand}  Модель: ${car.model}  Year:${car.year}`
}
console.log(displayInfo());

// Задача №7, Создал новый обьект внутри обьекта "car"

car.person = {
    city: "Bishkek",
    map: "Kyrgyzstan",
    address: {
        name: "КНАУ",
        adres: "Улица Медерова"
    }
}

// Задача №8, Сравнил два обьекта 

let comparison = { myName: "Syimyk", myAge: "19", }

let comparisonTwo = { myName: "Syimyk", myAge: "19", }

console.log(comparison === comparisonTwo);

// Задача №9,  Создал обьект и добавил  ему значения через переменную !

const total = {
    myName: "Syimyk",
    myAge: "19",
}
const job = "job"

const value = "developer"

total[job] = value;


// Задача №10, Копия обьекта, копировал обьект с верху "total" !

const myObject = Object.assign({}, total)

// const myObject = total

myObject.myAge = '20'

console.log(total, 'total');
console.log(myObject, 'newObj');

// Екстра домашка №1 !

function createStudent(name, age) {
    let student = {
        name: name,
        age: age
    };
    return student;
}
console.log(createStudent("Асан", 18));

// №2 Изменил возраст обьекта через функции!

function changeAge(student, newAge) {
    student.age = newAge;
}

let student = {
    name: 'John',
    age: 20
};

console.log(student);

changeAge(student, 25);

// №3 

function createAnimal(type, sound) {
    return animal = {
        type: type,
        sound: sound
    };
}
console.log(createAnimal('cat', 'meow'));
