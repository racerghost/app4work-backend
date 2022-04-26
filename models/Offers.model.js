const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const offerSchema = new Schema({
  companyId: {type: mongoose.Schema.ObjectId, ref: 'Company'},
  workArea: { type: String, required: true },
  specificArea: { type: String, required: true} ,
  salary: { type: String, required: true },
  active: { type: Boolean, required: false, default: false},
  publicationDate: { type: Date, required: true, default: Date.now() },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model('Offers', offerSchema);