var Knex = require('knex')
var knexConfig = require('../knexfile')['development']
var knex = Knex(knexConfig)

module.exports = {
  getAll: getAll
}

function getAll(){
  return knex('cats')
}

function getCatsById(id){
  return knex('cats').where('id', id)
}

function createNewCat(catObject){
  return knex('cats').insert(catObject)
}

function updateCat(catObject){
  return knex('cats'),where('id', catObject.id).update(catObject)
}
