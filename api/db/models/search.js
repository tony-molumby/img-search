const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
  search_term: String,
  when: {
    type: Date,
    default: Date.now
  }
});

const Search = mongoose.model('search', SearchSchema);

module.exports = Search;

