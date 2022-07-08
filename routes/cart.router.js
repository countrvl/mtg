const router = require('express').Router();
const nodemailer = require('nodemailer');
const authCheck = require('../middlewares/error');
const {
  Card, User, Сondition, City, Basket,
} = require('../db/models');

async function mailer(email) {
  // const testEmailAccount = await nodemailer.createTestAccount();

  const transporter = await nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    // port: 587,
    // secure: false,
    service: 'gmail',
    auth: {
      // user: testEmailAccount.user,
      // pass: testEmailAccount.pass,
      user: 'countrvl@gmail.com',
      pass: 'jsyijgxlxpzaejsb',
    },
  });

  const result = await transporter.sendMail({
    from: '"Node js" <nodejs@example.com>',
    // to: 'user@example.com, countrvl@gmail.com',
    to: `${email}`,
    subject: 'Магазин карт MTG',
    text: 'Сообщение от магазина MTG',
    html:
      'Ваша карта продана',
  });
  console.log(result);
  return result;
}

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

router.get('/check', async (req, res) => {
  mailer('countrvl@yandex.ru');
  const userId = await User.findOne({ where: { name: req.session?.userName } });
  // console.log(userId);
  const cards = await Basket.findAll({
    attributes: ['b_card_id'],
    where: { b_user_id: userId.id },
    raw: true,
  });
  const cardsId = cards.map((el) => el.b_card_id);
  try {
    await Card.update({ user_id: userId.id, status: false }, { where: { id: cardsId } });
  } catch (error) {
    res.sendStatus(418);
  }
  try {
    await Basket.destroy({ where: { b_user_id: userId.id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(418);
  }
  try {
    // mailer(emails);
    // res.sendStatus(200);
  } catch (error) {
    res.sendStatus(418);
  }
});

module.exports = router;
