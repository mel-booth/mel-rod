
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', function(table){
    table.increments('id')
    table.string('name')
    table.integer('lives')
    table.text('lifeStory')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats', function(table){
    table.dropColumn('id')
    table.string('name')
    table.integer('lives')
    table.text('lifeStory')
  })

};
