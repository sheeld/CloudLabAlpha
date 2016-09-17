var express = require('express');
var router = express.Router();
var passport = require('passport');
var projectService = require('../services/project-service');
var config = require('../config');
var restrict = require('../auth/restrict');

/* Project entry point */
router.get('/', restrict, function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.send('respond with a resource');
  }
  var vm = { 
    title: 'Place an Order',
    firstName: req.user ? req.user.firstName : null,
    orderId: req.session.orderId
  };
  res.render('projects', vm);
});

router.get('/create', restrict, function(req, res, next) {
  var vm = {
    title: 'Create a project'
    
    // email: req.user ? req.user.email : null,
  };
  res.render('projects/create', vm);
});

router.post('/create', restrict, function(req, res, next) {
  projectService.addProject(req.user, req.body, function(err) {
    if (err) {
      console.log(err);
      var vm = {
        title: 'Create a project',
        input: req.body,
        error: err
      };
      return res.render('projects/create', vm);
    }
    return res.render('')
  });
});

router.get('/create/comment', restrict, function(req, res, next) {
  var vm = {
    title: 'Add a comment'
  };
  res.render('projects/create/comment', vm);
});

router.post('/create/comment', restrict, function(req, res, next) {
    projectService.addComment(req.user, req.body, function(err) {
    if (err) {
      console.log(err);
      var vm = {
        title: 'Add a comment',
        input: req.body,
        error: err
      };
      return res.render('projects/create', vm);
    }
    return res.render('')
   });
});

router.get('/upload', restrict, function(req, res, next) {
  var vm = {
    title: 'upload stem'
    
    // email: req.user ? req.user.email : null,
  };
  res.render('projects/upload', vm);
});

router.post('/upload', restrict, function(req, res, next) {
  projectService.uploadStem(req.user, req.project, req.body, function(err) {
    if (err) {
      console.log(err);
      var vm = {
        title: 'Upload Stem',
        input: req.body,
        error: err
      };
      return res.render('projects/upload', vm);
    }
    return res.render('')
  });
});


// router.post('/login', 
//   function(req, res, next) {
//     if (req.body.rememberMe) {
//       req.session.cookie.maxAge = config.cookieMaxAge;
//     }
//     next();
//   },
//   passport.authenticate('local', {
//     failureRedirect: '/', 
//     successRedirect: '/home',
//     failureFlash: 'Invalid credentials'
//   }));

// router.get('/logout', function(req, res, next) {
//   req.logout();
//   req.session.destroy();
//   res.redirect('/');
// });

module.exports = router;
