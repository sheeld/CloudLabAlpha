var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackSchema = new Schema({
    Id_: { type: new mongoID},
    creator: { type: schema.types.ObjectId, ref: 'user'},
    created: { type: date, default: Date.now},
    data: {},
    length: { type: number},
    format: { type: string}, 
    hidden { type:: boolean},
});

var Track = mongoose.model('Track', trackSchema);

module.exports = {
  Track: Track
};