var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/get', function(req, res, next) {
  res.render('index', { title: 'GET' });
});

router.put('/put', function(req, res, next) {
  res.render('index', { title: 'PUT' });
});

router.delete('/del', function(req, res, next) {
  res.render('index', { title: 'DELETE' });
});

router.post('/post', function(req, res, next) {
  res.render('index', { title: 'POST' });
});

module.exports = router;
