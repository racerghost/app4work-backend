const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  birth: { type: Date, required: true },
  gender: { type: String, required: true },
  location: { type: String, required: true },
  workArea: { type: String, required: true },
  specificArea: { type: String, required: true },
  salary: { type: String, required: true },
  tags: { type: Array, required: false }
});



module.exports = model('User', userSchema);