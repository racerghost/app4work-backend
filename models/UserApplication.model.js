const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserApplicationSchema = new Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
  offerId: { type: mongoose.Schema.ObjectId, ref: "Offers" },
  companyId: { type: mongoose.Schema.ObjectId, ref: "Company" },
});

module.exports = model('UserApplication', UserApplicationSchema);