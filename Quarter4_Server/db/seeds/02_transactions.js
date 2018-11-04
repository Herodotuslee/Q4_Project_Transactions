exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("transactions")
    .del()
    .then(function() {
      return knex("transactions").insert([
        { user_id: 1, amount: 100, business_name: "galvanize", type: "yoyo" }
      ]);
    });
};
