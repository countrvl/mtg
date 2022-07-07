const router = require('express').Router();
const { Card, User, Condition, City } = require('../db/models');

router.get('/', (req, res) => {
  res.redirect('/');
});


module.exports = router;
