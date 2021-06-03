const mongoose = require("mongoose");
const User = require("../models/userModel");

const album = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  fans:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }]
});

module.exports = mongoose.model("Album", album);
