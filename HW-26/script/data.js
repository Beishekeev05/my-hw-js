// const rer = fetch("https://rickandmortyapi.com/api/episode/1")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.warn(err));

//! Функция для рендеринга в HTML ////////////////
function renderHTML(cart) {
  //? Беру элемент из ДОМ узла
  let dad = document.querySelector(".div");

  let html = "";

  //* Создаю итерацию для рендеринга

  cart.forEach((value) => {
    html += `
        <div   class="block" id="box">
        <img src="${value.image}"/>
        <p class="names">${value.name}</p>
        <p class="status">${value.status}</p>
        <p>${value.species}</p>
        </div>
        `;
  });

  //? Вывожу в экран

  dad.innerHTML = html;
}

//? Функция для нахаждение ////////////////
function searchСondition() {
  let blocks = document.querySelectorAll(".block");

  blocks.forEach((block, index) => {
    let item = cart[index];

    //! Проверя статусы
    if (item.status === "unknown") {
      //? Даю стили

      block.style.border = "4px solid gray";
      block.style.borderRadius = "4px";
      block.style.color = "gray";

      //! Снова провераю
    } else if (item.status === "Dead") {
      //? Даю стили

      block.style.border = "4px solid red";
      block.style.borderRadius = "4px";
      block.style.color = "red";

      //! Снова провераю
    } else if (item.status === "Alive") {
      //? Даю стили

      block.style.border = "4px solid green";
      block.style.borderRadius = "4px";
      block.style.color = "green";  
    }
    block.addEventListener("click", () => {
      alert(index);
    });
  });
}
