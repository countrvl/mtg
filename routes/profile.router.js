const router = require('express').Router();
const {
  Card, User, Сondition, City,
} = require('../db/models');
//
// router.get('/', (req, res) => {
// res.sendStatus(200);
// });

router.get('/', async (req, res) => {
  const allCardsBuy = await Card.findAll({ include: [{ model: User, include: [{ model: City }] }, { model: Сondition }], raw: true });
  const mySaleCards = await Card.findAll({ include: [{ model: User, include: [{ model: City }] }, { model: Сondition }], raw: true });
  console.log(allCardsBuy);
  const allCities = await City.findAll();
  const allСondition = await Сondition.findAll();

  res.render('entries/Lk', {
    allCardsBuy, mySaleCards, allCities, allСondition,
  });
});

router.post('/entries', (req, res) => {

});
module.exports = router;
