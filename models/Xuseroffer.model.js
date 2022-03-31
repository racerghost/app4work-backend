const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const XuserofferSchema = new Schema({
  userId: {type: String, required: true},
  offerId: {type: String, required: true}
});

module.exports = model('Xuseroffer', XcompanyofferSchema);