const authCheck = (req, res, next) => {
  if (req.session?.userName) {
    next();
  } else {
    res.redirect('/signup');
    // res.sendStatus(418);
  }
};

module.exports = authCheck;
