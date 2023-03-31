const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  // password: {
  //   type: String,
  //   // required: true,
  // },

  // role: {
  //   type: String,
  //   required: true,
  //   default: 'user',
  // },
});

const User = mongoose.model('User', contactSchema);

module.exports = {
  User,
};
