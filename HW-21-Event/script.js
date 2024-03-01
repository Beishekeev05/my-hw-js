/////// ДОМАШКА №1 ПРОВЕРИЛ КЛАСС ЭЛЕМЕНТА

let button = document.querySelector('#js-button')

let showClass = () => {
    if (button.classList.contains('js-button')) {
        return "Данный класс имеется"
    } else {
        return " Данный класс не имеется"
    }
}
button.onclick = function () {
    console.log(showClass())
    alert(showClass())
}

//////// ДОМАШКА №2 КНОПКА ОН \ ОФФ С ИЗМЕНЕАМЫМ ЗАДНИМ ФОНОМ !

let myButton = document.querySelector('#click')

console.log(myButton)


let buttonOnClick = () => {
    if (myButton.innerHTML === "ON") {
        myButton.innerHTML = "OFF";
        myButton.classList.add('bgColor')
        myButton.classList.remove('bgColorTwo')
    } else {
        myButton.innerHTML = "ON"
        myButton.classList.add('bgColorTwo')
        myButton.classList.remove('bgColor')
    }
}
myButton.addEventListener('click', buttonOnClick)

//////////////  ДОМАШКА №3 СОБЫТИЕ ONINPUT 

let inputText = document.getElementById('inputbutton');

inputText.oninput = function () {
    let text = document.querySelector('#pteg')
    text.textContent = inputText.value
};


//////////////// ДОМАШКА №4 KEYDOWN И KEYUYP

const name = ['number', 'color']
name[2]= 'age'
console.warn(name)

