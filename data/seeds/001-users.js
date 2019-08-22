
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('videogames').del()
    .then(function () {
      // Inserts seed entries
      return knex('videogames').insert([
        {name: 'Halo 3', protagonist: 'Master Chief'},
        {name: 'Breath of The Wild', protagonist: 'Link'},
        {name: 'Mario Kart', protagonist: 'Toad'}
      ]);
    });
};
