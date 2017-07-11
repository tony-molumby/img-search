
var mapImg = function(data){
  var list = [];
  list = data.items.map(function(item){
    return {
      url: item.pagemap.cse_image[0].src ? item.pagemap.cse_image[0].src : "",
      snippet: item.snippet ? item.snippet : "",
      thumbnail: item.pagemap.cse_thumbnail[0].src ? item.pagemap.cse_thumbnail[0].src : "" ,
      context: item.link ? item.link : ""
    }
  });
  return list;
}

module.exports = mapImg;