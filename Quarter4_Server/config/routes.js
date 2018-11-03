const controllers_transactions = require("../controllers/controllers_transactions.js");
const jwt = require("jsonwebtoken");
const secret = require("./secret");
module.exports = function(app) {
  app.post("/users/login", controllers_transactions.login);
  app.post("/users/signup", controllers_transactions.signup);

  // app.use(verifyToken);

  app.get("/", controllers_transactions.index);
  app.get("/users", controllers_transactions.getuser);
  app.get("/transactions", controllers_transactions.get);
  app.post("/transactions", controllers_transactions.add);
  app.delete("/transactions/:Expense_id", controllers_transactions.delete);
};

function verifyToken(req, res, next) {
  let token = req.headers["token"];

  // if token exists
  if (token) {
    // checks if it matches with our secret key
    jwt.verify(token, secret.jwt, (err, decoded) => {
      if (err) {
        res.json({ message: "Failed to authenticate" });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    res.json({ message: "Failed to authenticate" });
  }
}
