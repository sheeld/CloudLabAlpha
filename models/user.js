var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
  userName: {type: String, required: 'Please enter your user name'},
  firstName: {type: String, required: 'Please enter your first name'},
  lastName: {type: String, required: 'Please enter your last name'},
  email: {type: String, required: 'Please enter your email'},
  password: {type: String, required: 'Please enter your password'},
  projects: [{ type : Schema.ObjectId, ref : 'Project' }],
  created: {type: Date, default: Date.now},
  fav: {type: Array, default: null},
  active: {type: Boolean, default: true}
});
 
userSchema.path('userName').validate(function(value, next) {
  userService.findUser(value, function(err, user) {
    if (err) {
      console.log(err);
      return next(false);
    }
    next(!user);
  });
}, 'That user name is already in use');

userSchema.path('email').validate(function(value, next) {
  userService.findEmail(value, function(err, user) {
    if (err) {
      console.log(err);
      return next(false);
    }
    next(!user);
  });
}, 'That email is already in use');

var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
};