var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    projectName: {type: String, required: 'Please enter your project name'},
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    stems: [{type : Schema.Types.ObjectId, ref : 'Stem'}],
    comments: [{type : Schema.Types.ObjectId, ref : 'Comment'}],
    description: {type: String},
    created: {type: Date, default: Date.now},
    hidden: {type: Boolean, default: true},
    coverArt: {type: String},
    meta: {
        votes: [{type: Schema.Types.ObjectId, ref: 'User'}],
        Favs: {type: Number, default: 0}},
        contribution: {type : Schema.Types.ObjectId, ref: 'Contribution'}
});

var Project = mongoose.model('Project', projectSchema);

module.exports = {
  Project: Project
};