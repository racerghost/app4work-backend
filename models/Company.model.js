const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const companySchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  workArea: { type: String, required: true },
  size: { type: String, required: true }
});

module.exports = model('Company', companySchema);