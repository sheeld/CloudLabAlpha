// var fs = require('fs');
// var Grid = require('gridfs-stream');
// var GridFS = Grid(mongoose.connection.db, mongoose.mongo);
var Project = require('../models/project').Project;

exports.addProject = function(user, project, next) {
  
    project.creator = user._id;
    var newProject = new Project({
      projectName: project.name,
      creator: project.creator,
      description: project.description,
      created: project.date,
      hidden: true,
      coverArt: project.coverArt,
    });
    
    newProject.save(function(err) {
      if (err) {
        return next(err);
      }
      next(null);
    });
};

// exports.uploadStem = function (user, project, stem, next) {
//     var writestream = GridFS.createWriteStream({
//         filename: stem.name
//     });
//     writestream.on('close', function (file) {
//       next(null, file);
//     });
//     fs.createReadStream(stem.path).pipe(writestream);
    
// exports.readStem = function () {
//     var readstream = GridFS.createReadStream({_id: id});
//     readstream.pipe(res);
    
//     }

exports.addComment = function(project, user, comment, next) {
  
    comment.project = project._id
    comment.user = user._id;
    var newProject = new Project({
      project: comment.project,
      body: comment.body,
      user: comment.user,
      date: comment.date,
    });
    
    newProject.save(function(err) {
      if (err) {
        return next(err);
      }
      next(null);
    });
};

exports.findName = function(name, next) {
  Project.findOne({name: name.toLowerCase()}, function(err, project) {
    next(err, project);
  });
};

exports.findId = function(_id, next) {
  Project.findOne({_id: _id}, function(err, _id) {
    next(err, _id);
  });
};

exports.findCreator = function(creator, next) {
  Project.findOne({creator: creator}, function(err, project) {
    next(err, project);    
  });
};