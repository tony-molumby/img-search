var Img = require('../../models/img');

var imageSearch = function(query, offset){
  var obj = {};
  //text index has been created on the snippet field
  return Img.find({
    $text: {
      $search: query
    }  
  }).exec();
};

module.exports = imageSearch;