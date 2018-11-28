var pgp = require('pg-promise')()
var db = pgp('postgres://admin:hot3Zoot@localhost:5432/node_dev')

module.exports = db;
