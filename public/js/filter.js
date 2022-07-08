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

const filterCity = document.querySelector('[data-findbox]');
filterCity.addEventListener('change', async () => {
  const search1 = document.querySelector('[data-search1]').value;
  const search2 = document.querySelector('[data-search2]').value;
  console.log(search1, search2);

  const cardBox = document.querySelector('[data-boxcard]');
  cardBox.remove();

  const response = await fetch('/cardlist');

  if (response.ok) {
    const allCards = await response.json();

    if (search1 === '0' && search2 === '0') {
      cards = allCards;
    } else if (search1 === '0') {
      cards = allCards.filter((el) => el.title === search2);
    } else if (search2 === '0') {
      cards = allCards.filter((el) => el['User.City.city_name'] === search1);
    } else {
      cards = allCards.filter((el) => el['User.City.city_name'] === search1 && el.title === search2);
    }

    const findBox = document.querySelector('[data-findbox]');
    findBox.insertAdjacentHTML('afterEnd', '<div id="body" data-boxcard class="addcards"></div>');
    cards.forEach((el) => {
      const newCardBox = document.querySelector('[data-boxcard]');
      newCardBox.insertAdjacentHTML('beforeEnd', showCards(el));
    });
  }
});
