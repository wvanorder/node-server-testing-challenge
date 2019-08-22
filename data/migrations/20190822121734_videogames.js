
exports.up = function(knex) {
 return knex.schema.createTable('videogames', tbl => {
     tbl.increments();

     tbl
       .string('name', 60)
       .notNullable()
       .unique()

    tbl
      .string('protagonist', 40)
      .notNullable()
 });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('videogames');
};
