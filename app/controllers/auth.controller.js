const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../config/auth.config");

const Auth = require("../models/auth.models");

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);

  Auth.signup(username, hash);
  res.send("Success");
};

exports.signin = async (req, res) => {
  let user = await Auth.getUser(req.body.username);

  if (!user) {
    res.status(404).send({ message: "User not found!" });
  }

  console.log("here****", req.body.password, user);

  let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

  if (!passwordIsValid) {
    res.status(404).send({ accsessToken: null, message: "Password invalid!" });
  }

  let token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 86400,
  });

  res.status(200).send({
    userId: user.id,
    username: user.username,
    accsessToken: token,
  });
};
