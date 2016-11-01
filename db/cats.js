var Knex = require('knex')
var knexConfig = require('../knexfile')['development']

var knex = Knex(knexConfig)

module.exports = {
  getAll: getAll
}

function getAll(){
  return knex('cats')
}
