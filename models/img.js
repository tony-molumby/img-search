const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImgSchema = new Schema({
  url: String,
  snippet: String,
  thumbnail: String,
  context: String
});

const Img = mongoose.model('img', ImgSchema);

module.exports = Img;
