// Задача №1

let basketball = () => {
    let plus = 500
    let basketObject = {
        ballName: "Basketball",
        price: 2095,
        riseInPrice: () => {
            return basketObject.price + plus;
        },
    }
    return basketObject;
}

// Задача №2,  Добавил время доставки к товару верхнему объекту

console.log(basketball());

console.log(basketball().riseInPrice());

const newBasketball = basketball()

newBasketball["delivery-time"] = "3 days"

console.log(newBasketball);

// Задача №3, Сравнил цены продуктов

let comparePrice = (product1, product2) => {
    let produckt = {
        nameproduct1: "Баскетбольный мяч",
        product1: 2095,
        product2: 1095
    }
    if (Math.max(product1, product2) === product1) {
        return `Продукт ${produckt.nameproduct1} дороже, чем продукт 2`;
    } else if (Math.max(product1, product2) === product2) {
        return `Продукт 2 дороже, чем ${produckt.nameproduct1}`;
    } else {
        return "Технические ошибки";
    }
}
console.log(comparePrice(2095, 1095));

// Задача №4 Сравнил схожесть объектов через функци

let product1 = {
    name: "ball",
    price: 2000
}
let product2 = {
    name: "ball",
    price: 2000
}
let isSameProduct = (a, b) => {
    return a.name === b.name && a.price === b.price;
}
console.log(isSameProduct(product1, product2));

// Задача №5 toLowerCase букв

let str = "HELLO WORLD"
let toLowerCase = str.toLowerCase()
let toLowerUperCase = str.toLocaleUpperCase()
console.log(toLowerCase);
console.log(toLowerUperCase);

// Задача №6 repeat string

let repead = "Syimyk"
let toRepead = repead.repeat(536)
console.log(toRepead);

// Задача №7 DOM

let button = document.getElementById("myButton1");
let output = document.getElementById("output");

function showParam(params) {
    output.innerText = "Ваш выбор" + params;
}
button.addEventListener("click", () => {
    showParam(' Орел')
});

////

let reshka = document.getElementById("reshka")
let tag = document.getElementById("pteg")

function showParams(paramsTwo) {
    tag.innerText = "Ваш выбор " + paramsTwo
}
reshka.addEventListener("click", () => {
    showParams(' Решка')
});

// Локал storage

localStorage.setItem('number', 996704414042)

let date = localStorage.getItem('number')

console.log(date);

/////

localStorage.setItem('name', "Syimyk")

let namData = localStorage.getItem('name')

console.log(namData);

//

const productOne = {
    name: 'basketball',
    price: 2095
};

localStorage.setItem('productOne', JSON.stringify(productOne))

let toBringBack = JSON.parse(localStorage.getItem('productOne'))

console.log(toBringBack);

// 

document.write(JSON.stringify(productOne));


//////// Екстра Home Work ///////


