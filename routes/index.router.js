const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.render('entries/index');
});

router.get('/singup', (req, res) => {
  res.render('entries/singup');
});

router.get('/singin', (req, res) => {
  res.render('entries/singin');
});

router.post('/signup', async (req, res) => {
  const { name, city, email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);

  try {
    const [newUser, createdOrNot] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        name: name,
        city_id: city,
        password: hashedPass,
      },
    });

    if (!createdOrNot) {
      return res.send('Пользователь с таким email уже существует').end();
    }

    req.session.userId = newUser.id;

    return res.redirect('/');
  } catch (error) {
    return res.sendStatus(401);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const findedUser = await User.findOne({ where: { email: email } });
    if (await bcrypt.compare(password, findedUser.password)) {
      req.session.userId = findedUser.id;
      return res.redirect('/');
    }
  } catch (error) {
    return res.sendStatus(401);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('userId');
  res.redirect('/');
});

module.exports = router;
