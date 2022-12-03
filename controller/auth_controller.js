let database = require("../database");
const express = require("express");
const userModel = require("../models/userModel").userModel;
const { forwardAuthenticated } = require("../middleware/checkAuth");
const passport = require("../middleware/passport");



let authController = {
  login: (req, res) => {
    forwardAuthenticated
    res.render("auth/login")
  },

  register: (req, res) => {
    res.render("auth/register");
  },
  
  loginSubmit: (req, res) => {
      // make passport verify user exists using "local" strategy
      passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/auth/register",
      })   
    
   
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
