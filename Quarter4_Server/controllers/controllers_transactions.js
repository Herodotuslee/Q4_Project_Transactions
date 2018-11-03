const knex = require("../db/knex.js");
const hasher = require("../config/hasher");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
module.exports = {
  login: (req, res) => {
    knex("user")
      .where("email", req.body.email)
      .then(user => {
        if (user[0]) {
          hasher.check(user[0], req.body).then(isMatch => {
            if (isMatch) {
              let token = jwt.sign({ user: user[0] }, secret.jwt, {
                expiresIn: 2000
              });
              res.json({ token });
            } else {
              res.json({ message: "Invalid Email/Password" });
            }
          });
        } else {
          res.json({ message: "Invalid Email/Password" });
        }
      });
  },
  signup: (req, res) => {
    hasher.hash(req.body).then(user => {
      knex("user")
        .insert(user)
        .then(() => {
          res.json({ message: "User has been created" });
        });
    });
  },
  index: function(req, res) {
    console.log("decoded", req.decoded);
    res.send("Hello");
  },
  getuser: (req, res) => {
    knex("user").then(result => {
      res.json(result);
    });
  },
  get: (req, res) => {
    knex("transactions")
      .limit(10)
      .offset(req.query.page * 10)
      .then(result => {
        res.json(result);
      });
  },

  delete: (req, res) => {
    knex("transactions")
      .where("id", req.params.Expense_id)
      .del()
      .then(result => res.json(result));
  },
  add: (req, res) => {
    knex("transactions")
      .insert({
        business_name: req.body.content,
        amount: req.body.amount,
        type: req.body.type
      })
      .returning("*")
      .then(result => {
        res.json(result[0]);
      });
  }
};
