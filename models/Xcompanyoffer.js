const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const XcompanyofferSchema = new Schema({
  companyId: {type: String, required: true},
  offerId: {type: String, required: true}
});

module.exports = model('Xcompanyoffer', XcompanyofferSchema);