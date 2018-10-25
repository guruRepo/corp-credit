var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:GuruPostgres123@localhost:5432/corpcredit';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllCredits: getAllCredits,
  getSingleCredit: getSingleCredit
};

function getAllCredits(req, res, next) {
  //db.any('select * from credit_research."overview"')
    db.one('SELECT $1 AS value', 123)	
	.then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL Credits'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleCredit(req, res, next) {
  var creditID = parseInt(req.params.id);
  db.one('select * from credit_research."overview" where credit_research_id = $1', creditID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE credit'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}