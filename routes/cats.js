var express = require('express');
var router = express.Router();
var catsDB = require('../db/cats')
/* GET users listing. */
router.get('/', function(req, res, next) {
  catsDB.getAll()
  .then(function(catsFromDB){
    res.render('cats', {cats: catsFromDB})
  })
  .catch(function(error){
    console.log(error);
  })
});

router.get('/new/', function(req, res){
  res.render('catsNew')
})

module.exports = router;
