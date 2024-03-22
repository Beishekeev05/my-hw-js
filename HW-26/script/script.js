let cart = []; //* Создаю  глобальный пустой массив!

//! Беру данные из url!

const fetchInfo = fetch("https://rickandmortyapi.com/api/character?page=2")
  .then((response) => response.json())

  .then((data) => {
    cart.push(...data.results); //! Добавляю объекты в массив cart c помощю распыление !

    console.log(cart);

    renderHTML(cart); //? Вызываю функцию Рендеринга renderHTML

    searchСondition(cart); //? Вызываю функцию нахаждение

    // clickId(); //* Вызыываю функцию для id
  })
  .catch((err) => console.warn(err));
