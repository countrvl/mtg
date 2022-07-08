// // const baseModule = require("hbs");
// const authButton = document.querySelector('.body');
// authButton.addEventListener('click', async (e) => {
//   if (e.target.type === 'submit') {
//     e.preventDefault();
//     const response = await fetch('/singup', {
//       method: 'post',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({ }),
//     });
//     if (response.ok) {

//     }
//   }
// });
const body = document.querySelector('#body');
body.addEventListener('click', async (e) => {
  console.log('!!');
  if (e.target.tagName === 'BUTTON') {
    if (e.target.name !== 'btnDel') {
      console.log('!!!!');
      // e.preventDefault();
      const cardId = e.target.id;
      const response = await fetch('/cart/add', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ cardId }),
      });
      if (response.ok) {
        alert('Карта добавлена в корзину!');
      } else {
        alert('Произошла ошибка');
      }
    } else {
      const cardDelId = e.target.id;
      const response = await fetch('/cart', {
        method: 'delete',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ cardDelId }),
      });
      if (response.ok) {
        alert('Карта удалена из корзины!');
        window.location.replace('/cart');
      } else {
        alert('Произошла ошибка');
      }
    }
  }
});

const btnCheck = document.querySelector('#check');
btnCheck.addEventListener('click', async () => {
  const response = await fetch('/cart/check');

  if (response.ok) {
    alert('Покупка завершена');
    window.location.replace('/');
  } else {
    alert('Произошла ошибка');
  }
});
