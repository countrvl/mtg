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
  if (e.target === 'button') {
    e.preventDefault();
    const cardId = e.target.id;
    console.log('---->', cardId);
  }
});
