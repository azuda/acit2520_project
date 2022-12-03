module.exports = {
  // verify user is logged in
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/auth/login");
  },
  // prevent logged in users from accessing login page
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      // if user is not logged in next() them to login page
      return next();
    }
    // redirect to dashboard
    res.redirect("/dashboard");
  },
};
