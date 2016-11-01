
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, Name: 'Garfield', lives: 9, lifeStory: 'I love lasagne'}),
        knex('cats').insert({id: 2, Name: 'Mr Cat', lives: 2, lifeStory: 'I like rock n roll'}),
        knex('cats').insert({id: 3, Name: 'Dorothy', lives: 7, lifeStory: 'I live in the rubbish bin'})
      ]);
    });
};
