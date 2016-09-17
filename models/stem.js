var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stemSchema = new Schema({
    trackName: { type: string},
    Description: { type: string},
    track: [
      data: { type: schema.types.ObjectId, ref: 'track'},
      votes: { type: schema.types.ObjectId, ref: 'user'}
    ],
});

var Stem = mongoose.model('Stem', stemSchema);

module.exports = {
  Stem: Stem
};