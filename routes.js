var express = require('express');
var router = express.Router();
var fs = require('fs');
const search = require('./api/imagesearch/search');
const mapImg = require('./api/imagesearch/mapimg');
var history = require('./api/imagesearch/history');
var Search = require('./api/db/models/search');

router.get('/', function(req, res){
  res.status(200);
  res.sendFile(process.cwd() + '/app/views/index.html');
});

router.get('/api/imagesearch/:query', function(req, res){
  var offset = req.query.offset;
  var query = req.params.query;
  search(query, offset)
    .then(function(data){
      history.add(query);
      res.json(mapImg(JSON.parse(data)));
  })
    .catch(function(e){
      res.send(e);
  })
});

router.get('/api/history', function(req, res){
  history.view()
    .then(function(data){
      res.send(data);
    })
    .catch(function(e){
      console.log(e);
      res.send(e);
    });
});


// Respond not found to all the wrong routes
router.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
router.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})


module.exports = router;