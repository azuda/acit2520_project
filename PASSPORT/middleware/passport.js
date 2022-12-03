const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("../controllers/userController");


// receives email and pass input from authRoute.js
const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  // function verifying if user is in database
  (email, password, done) => {
    const user = userController.getUserByEmailIdAndPassword(email, password);
    return user
      // ternary true
      ? done(null, user)
      // ternary false
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  let user = userController.getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

module.exports = passport.use(localLogin);
