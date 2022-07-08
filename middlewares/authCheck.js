const authCheck = (req, res, next) => {
  if (req.session?.userName) {
    next();
  } else {
    res.sendStatus(403);
    // res.status(418).redirect('/signup');    
  }
};

module.exports = authCheck;
