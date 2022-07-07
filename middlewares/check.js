const authCheck = (req, res, next) => {
  if (req.session?.userName) {
    next();
  } else {
    // res.redirect('/');
    alert('gnkf')
  }
};

module.exports = authCheck;
