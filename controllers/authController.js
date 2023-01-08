const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");

// AUTHENTICATION LOGIC
const authUser = async (username, password, cb) => {
  const exists = await UserModel.exists({ email: username }); //omit this and directly check with .findOne()

  if (!exists) {
    return cb(null, false, { message: "No entry in database." });
  } else {
    const user = await UserModel.findOne({ email: username });

    //check if password hash matches with database entry
    if (bcrypt.compareSync(password, user.password)) {
      return cb(null, user);
    } else {
      console.log("Incorrect!!");
      return cb(null, false, { message: "Incorrect email or password." });
    }
  }
};

passport.use(new LocalStrategy(authUser));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  UserModel.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = { passport };

