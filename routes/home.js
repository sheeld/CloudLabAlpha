var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict')

router.get('/', restrict, function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  var vm = {
    id: req.user ? req.user._id : null,
    title: req.user.firstName + '\'s Home',
    email: req.user ? req.user.email : null,
    firstName: req.user ? req.user.firstName : null,
    lastName: req.user ? req.user.lastName : null,
  };
  res.render('home', vm);
});

module.exports = router;
