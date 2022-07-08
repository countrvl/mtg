/* eslint-disable max-len */
const router = require('express').Router();
const session = require('express-session');
const {
  Card, User, Сondition, City,
} = require('../db/models');

//
// router.get('/', (req, res) => {
// res.sendStatus(200);
// });

router.get('/', async (req, res) => {
  const allCardsBuy = await Card.findAll({ where: { user_id: req.session.userId, status: false }, include: [{ model: User, include: [{ model: City }] }, { model: Сondition }], raw: true });
  const mySaleCards = await Card.findAll({ where: { user_id: req.session.userId, status: true }, include: [{ model: User, include: [{ model: City }] }, { model: Сondition }], raw: true });

  const allCities = await City.findAll();
  const allСondition = await Сondition.findAll();

  res.render('entries/Lk', {
    allCardsBuy, mySaleCards, allCities, allСondition,
  });
});

router.post('/', async (req, res) => {
  const {
    title, img, price, wear,
  } = req.body;

  const newCard = await Card.create({
    title,
    img,
    price,
    user_id: req.session.userId,
    condition_id: wear,
  });
  res.redirect('/profile');
});
module.exports = router;
