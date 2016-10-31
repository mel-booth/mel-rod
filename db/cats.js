var Knex = require('knex')
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig)

module.exports = {
  getAll
}

function getAll(){
  return knex('cats')
}
