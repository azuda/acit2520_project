let database = require("../database");
const userModel = require("../models/userModel").userModel;

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    // implement login logic

    // const { email, password } = req.body;
    // const user = userModel.findOne(email);
    // if (user.password === password) {
    //   req.session.user = user;
    //   res.redirect("/reminders");
    // } else {
    //   res.redirect("/login");
    // }
  },

  registerSubmit: (req, res) => {
    // implement register logic

    // const { name, email, password } = req.body;
    // const user = userModel.findOne(email);
    // if (user) {
    //   res.redirect("/register");
    // } else {
    //   const newUser = {
    //     id: database.length + 1,
    //     name,
    //     email,
    //     password,
    //   };
    //   database.push(newUser);
    //   req.session.user = newUser;
    //   res.redirect("/reminders");
    // }
  },
};

module.exports = authController;
