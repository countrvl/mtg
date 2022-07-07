const router = require('express').Router();
const {Card} = require('../db/models')

router.get('/', (req, res) => {
  res.redirect('/');
});

// router.post('/', async (req, res) => {
// const allCards = await Card.findAll({})
// });

module.exports = router;
