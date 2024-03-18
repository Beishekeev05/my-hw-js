const ul = document.querySelector("#ulDad");

const cart = [];
// ! Функция для добавление и удаление елементов
function createElement() {
  ul.innerHTML = "";

  document.querySelectorAll(".block").forEach((button) => {
    button.addEventListener("click", () => {
      // ? Беру данные по атрибутам
      const productId = button.dataset.id;

      const existingProduct = products.find((item) => {
        return +productId === item.id;
      });

      let existingProInCart;

      cart.forEach((item) => {
        if (item.id === existingProduct.id) {
          existingProInCart = item;
        }
      });

      console.log(Boolean(existingProInCart));

      if (!existingProInCart) {
        existingProduct.priseInCart =
          existingProduct.quantity * existingProduct.prise;
        cart.push(existingProduct);
      } else {
        existingProInCart.quantity++;
        existingProInCart.priseInCart =
          existingProInCart.quantity * existingProInCart.prise;
      }

      renderCarts(cart);
    });
  });
}

function renderCarts(params) {
  ul.innerHTML = "";

  params.forEach((item) => {
    // !
    let lishka = document.createElement("li");
    let delet = document.createElement("button");
    let quantity = document.createElement("span");
    // ! Даю классы
    delet.classList.add("btn");
    lishka.classList.add("list");
    quantity.classList.add("quantity");
    //*  Добавляю тексты и т д ////////////////////////////////////////////////////////////////////////////////////
    quantity.textContent = `${item.quantity}`;
    delet.textContent = "Delete";
    lishka.textContent = `${item.name}, $${item.priseInCart / 100},`;
    // ?  Удаление елемента //////////////////////////////////////////////////
    delet.addEventListener("click", () => {
      delet.parentNode.remove(lishka);
    });
    // ! Добавляю к DOM узлу
    lishka.append(quantity, delet);
    ul.appendChild(lishka);
  });
}
