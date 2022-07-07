const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('entries/index');
});

router.get('/singup', (req, res) => {
  res.render('entries/singup');
});

router.get('/singin', (req, res) => {
  res.render('entries/singin');
});

module.exports = router;
