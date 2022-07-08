function showCards(obj) {
  return `
    <div  class="card" id="box">
    <div id="title">
          <h3>${obj.title}</h3>
      </div>
      <div class="img">
          <img src="${obj.img}" alt="">
      </div>
        <div id="ganre">
          <p>Цена: ${obj.price} $</p>
          <p>Состояние: ${obj['Сondition.condition_name']}</p>
          <p>Город продавца: ${obj['User.City.city_name']}</p>
      </div>
      <div>
      <button type="button" class="btn btn-outline-dark">Buy</button>
      </div>
    </div>
  `;
}

let cards = [];
let filters = [];

const filterCity = document.querySelector('[data-findbox]');
filterCity.addEventListener('change', async (e) => {
  const search = e.target.value;
  if (!(search === 'Поиск по городу') && !(search === 'Поиск по названию')) {
    filters.push(search);
    console.log(filters);
  }

  const cardBox = document.querySelector('[data-boxcard]');
  cardBox.remove();

  const response = await fetch('/cardlist');

  if (response.ok && !(search === 'Поиск по городу')) {
    const allCards = await response.json();
    cards = allCards.filter((el) => el['User.City.city_name'] === search);
    const findBox = document.querySelector('[data-findbox]');

    findBox.insertAdjacentHTML('afterEnd', '<div id="body" data-boxcard></div>');
    cards.forEach((el) => {
      const newCardBox = document.querySelector('[data-boxcard]');
      newCardBox.insertAdjacentHTML('beforeEnd', showCards(el));
    });
  }

  if (response.ok && search === 'Поиск по городу') {
    cards = await response.json();
    const findBox = document.querySelector('[data-findbox]');

    findBox.insertAdjacentHTML('afterEnd', '<div id="body" data-boxcard></div>');
    cards.forEach((el) => {
      const newCardBox = document.querySelector('[data-boxcard]');
      newCardBox.insertAdjacentHTML('beforeEnd', showCards(el));
    });
  }
});
