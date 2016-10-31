
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'garfield', lives: 9, lifeStory: 'i love lasagne'}),
        knex('cats').insert({id: 2, name: 'mr cat', lives: 2, lifeStory: 'i like rock n roll'}),
        knex('cats').insert({id: 3, name: 'dorothy', lives: 7, lifeStory: 'i live in the rubbish bin'})
      ]);
    });
};
