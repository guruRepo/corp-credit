var express = require('express');
var router = express.Router();

var db = require('../credit_research_queries');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nationwide Corporate Credit Research' });
});

router.get('/credit', db.getAllCredits);
router.get('/credit/:id', db.getSingleCredit);

module.exports = router;
