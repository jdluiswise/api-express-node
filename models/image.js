const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
  name: { type: String, require: true },
  imgUrl: { type: String, require: true },
  ceatedDate: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Image", imagesSchema);
