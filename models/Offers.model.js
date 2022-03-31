const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const offerSchema = new Schema({
  companyId: { type: String, required: true },
  workArea: { type: String, required: true },
  specificArea: { type: String, required: true} ,
  salary: { type: String, required: true },
  info: { type: Array, required: false },
  active: { type: Boolean, required: true },
  publicationDate: { type: Date, required: true }
});

module.exports = model('Offers', offerSchema);