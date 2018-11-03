exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function() {
      return knex("user").insert([
        { email: "albert@gmail.com", password: "12345" },
        { email: "nhan@gmail.com", password: "12345" }
      ]);
    });
};
