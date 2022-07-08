// рабочий фильтр по городу

const filterCity = document.querySelector('[data-filter]');
filterCity.addEventListener('change', async (e) => {
  const cityId = e.target.value;
  const cardBox = document.querySelector('[data-boxcard]');
  cardBox.remove();

  const response = await fetch('/cardlist');

  if (response.ok && !(cityId === '0')) {
    const allCards = await response.json();
    const filterCards = allCards.filter((el) => el['User.City.id'] === Number(cityId));
    const findBox = document.querySelector('[data-findbox]');

    findBox.insertAdjacentHTML('afterEnd', '<div id="body" data-boxcard></div>');
    filterCards.forEach((el) => {
      const newCardBox = document.querySelector('[data-boxcard]');
      newCardBox.insertAdjacentHTML('beforeEnd', showCards(el));
    });
  }

  if (response.ok && cityId === '0') {
    const allCards = await response.json();
    const findBox = document.querySelector('[data-findbox]');

    findBox.insertAdjacentHTML('afterEnd', '<div id="body" data-boxcard></div>');
    allCards.forEach((el) => {
      const newCardBox = document.querySelector('[data-boxcard]');
      newCardBox.insertAdjacentHTML('beforeEnd', showCards(el));
    });
  }
});
