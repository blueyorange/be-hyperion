const mongoose = require("mongoose");

const PresentationSchema = new mongoose.Schema(
  {
    title: String,
    markdown: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Presentation", PresentationSchema);
