const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, City } = require('../db/models');

router.get('/', (req, res) => {
  res.render('entries/index');
});

router.get('/singup', async (req, res) => {
  const citylist = await City.findAll();
  res.locals.userduble = false;
  res.render('entries/singup', { citylist });
});

router.get('/singin', (req, res) => {
  res.render('entries/singin');
});

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const city = req.body['сity'];
  const hashedPass = await bcrypt.hash(password, 10);
  const findCity = City.findOne({ where: { city_name: city } });

  try {
    const [newUser, createdOrNot] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        name: name,
        city_id: findCity.id,
        pass: hashedPass,
      },
    });

    if (!createdOrNot) {
      res.locals.userduble = !createdOrNot;
      return res.render('entries/singup');
    }

    req.session.userId = newUser.id;

    return res.redirect('/');
  } catch (error) {
    return res.sendStatus(401);
  }
});

router.post('/singin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const findedUser = await User.findOne({ where: { email: email } });
    if (await bcrypt.compare(password, findedUser.pass)) {
      req.session.userId = findedUser.id;
      req.session.userName = findedUser.name;
      return res.redirect('/');
    }
  } catch (error) {
    return res.sendStatus(401);
  }
});

router.get('/logout', (req, res) => {
  // res.locals.usersession = false;
  req.session.destroy();
  res.clearCookie('userId');
  res.redirect('/');
});

module.exports = router;
