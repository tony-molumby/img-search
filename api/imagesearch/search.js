const { URL, URLSearchParams } = require('url');
const googleUrl = 'https://www.googleapis.com/customsearch/v1';
const request = require('request-promise');

var search = function(query, offset){
  var url = new URL(googleUrl); 
  url.search = new URLSearchParams({
        q: query.replace(" ", "+"),
        start: offset ? parseInt(offset) : 1,
        cx: process.env.GOOGLE_CX,
        key: process.env.GOOGLE_API_KEY,
        fields: "items(link,snippet,pagemap/cse_thumbnail/src,pagemap/cse_image/src)"
  });
    
  return request.get({url});
};

module.exports = search;