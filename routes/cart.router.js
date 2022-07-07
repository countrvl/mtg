const router = require('express').Router();
const authCheck = require('../middlewares/error');
const {
  Card, User, Сondition, City, Basket,
} = require('../db/models');

// router.get('/', (req, res) => {
//   res.render('entries/Cart');
// });

router.post('/add', authCheck, async (req, res) => {
  const { cardId } = req.body;
  const userId = await User.findOne({ where: { name: req.session?.userName } });
  await Basket.create({ b_user_id: userId.id, b_card_id: cardId });
  res.sendStatus(200);
});

router.get('/', authCheck, async (req, res) => {
  const userId = await User.findOne({ where: { name: req.session?.userName } });
  const addCards = await Basket.findAll({
    where: { b_user_id: userId.id },
    include: [{
      model: Card,
      include: [{ model: Сondition },
        { model: User, include: [{ model: City }] }],
    }],
    raw: true,
  });
  res.render('entries/Cart', { addCards });
});

router.delete('/', async (req, res) => {
  const { cardDelId } = req.body;
  try {
    await Basket.destroy({ where: { b_card_id: cardDelId } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(418);
  }
});

module.exports = router;
