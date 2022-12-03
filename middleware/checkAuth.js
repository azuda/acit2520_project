module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    console.log("You are not logged in");
    res.redirect("/auth/login");
  },


  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    console.log("You are already logged in");
    res.redirect("/dashboard");
  },
};
