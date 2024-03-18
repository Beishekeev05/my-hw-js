VANTA.GLOBE({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  });
  let html = "";
  function render() {
    products.forEach((products) => {
      html += `<div class="block" data-id="${products.id}" data-price="${
        products.prise
      }" data-quantity="${products.quantity}">
      <img class="all-img" src="${products.image}" alt="bitcoin" />
      <div class="price">
        <p id="bitcoin">${products.name}</p>
        <p id="prise">$${products.prise / 100}</p>
      </div>
    </div>`;
    });
    document.querySelector(".main").innerHTML = html;
  }
  render();
  
  createElement();
  