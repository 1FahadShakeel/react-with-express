//models

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  CNIC: {
    type: String,
    required: true,
    unique: true,
  },
  phone:{
    type: String,
    required: true,

  },
  role:{
    type: String,
    required: true,

  },
  designation:{
    type: String,
    required: true,

  },

  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
