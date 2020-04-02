exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments();

    table.string("name").notNullable();
    table.integer("surname").notNullable();
    table.string("email");

  
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("patients");
};
