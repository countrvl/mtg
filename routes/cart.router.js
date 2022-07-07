const router = require('express').Router();
const {
  Card, User, Condition, City,
} = require('../db/models');

router.get('/', (req, res) => {
  res.render('entries/Cart');
});

module.exports = router;
