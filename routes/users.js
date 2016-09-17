var express = require('express');
var router = express.Router();
var passport = require('passport');
var userService = require('../services/user-service');
var config = require('../config');


router.get('/', function(req, res, next) { //GET users listing.
  res.render('users', vm);
});

router.get('/create', function(req, res, next) {
  var vm = {
    title: 'Create an account'
  };
  res.render('users/create', vm);
});

router.post('/create', function(req, res, next) {  // create user
  userService.addUser(req.body, function(err) {
    if (err) {
      console.log(err);
      var vm = {
        title: 'Create an account',
        input: req.body,
        error: err
      };
      delete vm.input.password;
      return res.render('users/create', vm);
    }
    req.login(req.body, function(err) {
      res.redirect('/home');
    });
  });
});

router.post('/login',   //login user
  function(req, res, next) {
    if (req.body.rememberMe) {
      req.session.cookie.maxAge = config.cookieMaxAge;
    }
    next();
  },
  passport.authenticate('local', {
    failureRedirect: '/', 
    successRedirect: '/home',
    failureFlash: 'Invalid credentials'
  }));

router.get('/logout', function(req, res, next) {  // logout user
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.get('/all', function(req, res, next) {
  
});

module.exports = router;
