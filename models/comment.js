var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    project: { type: Schema.Types.ObjectId, ref: 'Project'},
    body: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    date: {type:  Date}
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = {
  Comment: Comment
};