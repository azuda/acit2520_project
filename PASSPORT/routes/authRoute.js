const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

// localhost:8000/auth/login
router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

// req.body contains: { email: "jimmy123@gmail.com", password: "jimmy123!" }
// receives req.body object from ejs input
router.post(
  "/login",
  // make passport verify user exists using "local" strategy
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
  })
);

// clumsy way to do this, delegate to passport middleware instead
// router.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   // check database for email and password
//   // if user exists in database, create a session for them
//   // after, send them to dashboard page
//   // if the user does not exist in database, send them back to login page
//   res.render("dashboard.ejs");
// });

// localhost:8000/auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;
