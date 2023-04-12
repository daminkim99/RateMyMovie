const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
        { usernameField: "email" }, (email, password, done) => {
        try{
            let user = User.findOne({email:email.toLowerCase()})
            if (!user) {
                return done(null, false, { msg: `Email ${email} not found.` });
            }
            if (!user.password) {
                return done(null, false, {
                  msg:
                    "Incorrect Password",
                });
            }
        } catch(err){
            return done(err)
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
              return done(err);
            }
            if (isMatch) {
              return done(null, user);
            }
            return done(null, false, { msg: "Invalid email or password." });
          });
        })
    )

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id) 
        .then(user=> done(null, user))
        .catch(err => done(err))
  });
};