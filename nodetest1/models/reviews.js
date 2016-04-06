var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  reviewee : {type: String, required: true},
  reviewer : {type: String, required: true},
  rating : {type: Number, default: 0},
  likes: {type: Number, default: 0},
  commented : {type: String, default: ""}
});

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
