const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

// localhost:8000/login
router.get("/", forwardAuthenticated, (req, res) => res.render("auth/login"));

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/reminders",
    failureRedirect: "/login",
  })
);

// localhost:8000/auth/logout
// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/auth/login");
// });

module.exports = router;
