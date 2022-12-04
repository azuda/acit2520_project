const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");

// homepage
// localhost:8000/
router.get("/", (req, res) => {
  res.send("welcome");
});

// dashboard - ensureAuthenticated ensures this only works if logged in
// localhost:8000/dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

module.exports = router;
