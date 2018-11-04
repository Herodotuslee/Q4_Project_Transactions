exports.up = function(knex, Promise) {
  return knex.schema.createTable("transactions", table => {
    table.increments();
    table.string("business_name");
    table.string("type");
    table.float("amount");
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .index();
    table.timestamps(true, true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("transactions");
};
