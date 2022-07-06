const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('test_back_index');
});

module.exports = router;
