module.exports = (app) => {
  const auth = require("../controllers/auth.controller");

  app.post("/signup", auth.signup);

  app.post("/signin", auth.signin);
};
