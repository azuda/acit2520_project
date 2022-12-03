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
    // { id: 1, name: "", email: "", password: "" }
      // ternary true returns user object
      ? done(null, user)
      // ternary false returns false
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);

// called by login function in authRoute.js
// req session.passport.user - stores user.id in a new session
// req.user = user object - currently logged in user can be accessed anywhere with request
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// gets the rest of user data using user.id
passport.deserializeUser(function (id, done) {
  let user = userController.getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

// export all of passport library with our custom localLogin code
module.exports = passport.use(localLogin);



/*
Server hard drive

Session = {
  "fdsjfweuhvsblvjka": {  // cookie
    user
  }
}

*/