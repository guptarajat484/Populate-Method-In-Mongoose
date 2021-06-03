const mongoose = require("mongoose");
const Album = require("./albums");
const user = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
    },
  ],
});

module.exports = mongoose.model("User", user);
