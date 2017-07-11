var mongoose = require('mongoose');
var Search = require('../db/models/search');

var add = function(str){
  Search.create({
    search_term: str,
    when: Date.now()
  }, function(err, doc){
    if(err){console.log('error saving search');
    } else {
      console.log('successfully saved search');
    };
    
  });
}

var view = function(){
  return Search.find({},{_id:0, __v:0}).exec();
};


module.exports = {
  view: view,
  add: add
}