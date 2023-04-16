const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  title_id: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    
  },
  rating: {
    type: String,
    required: true,
  },
  release_date: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  starred: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Rating", RatingSchema);