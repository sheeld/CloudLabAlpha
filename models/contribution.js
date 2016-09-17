var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contributionSchema = new Schema({
    project: {type: Schema.Types.ObjectId, ref: 'Project'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    percent: {type: Number}
});

var Contribution = mongoose.model('Contribution', contributionSchema);

module.exports = {
  Contribution: Contribution
};