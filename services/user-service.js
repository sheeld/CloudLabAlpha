var bcrypt = require('bcrypt');
var User = require('../models/user').User;

exports.addUser = function(user, next) {
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    var newUser = new User({
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email.toLowerCase(),
      password: user.password
    });
    
    newUser.save(function(err) {
      if (err) {
        return next(err);
      }
      next(null);
    });
  });
};

exports.deleteUser = function(user, next) {
  
}

exports.editUser = function(user, next) {
  
}

exports.findEmail = function(email, next) {
  User.findOne({email: email.toLowerCase()}, function(err, email) {
    next(err, email);    
  });
};

exports.findUser = function(userName, next) {
  User.findOne({userName: userName}, function(err, user) {
    next(err, user);    
  });
};

exports.listUsers = function(userName, next) {
  User.find({}, function(err, user) {
    next(err, user);
  });
};

exports.findUser_id = function(_id, next) {
  User.findOne({_id: _id}, function(err, _id) {
    next(err, _id);    
  });
};