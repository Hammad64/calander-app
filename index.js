const express = require("express");
const mongoose = require('mongoose');
const USER = require('./models/aesKey');
const passport = require("passport");
const facebookStrategy = require('passport-facebook').Strategy;

const app = express()

mongoose.connect('mongodb+srv://khanhammad1093:gateway123@cluster0.jlgzbsx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((id,done)=>{
    done(null,id)
})

passport.use(new facebookStrategy({
  clientID: "3503468819902886",
  clientSecret: "e935722a11be341f17153b14037ac27b",
  callbackURL: "http://localhost:3000/facebook/callback"
}, (accessToken, refreshToken, profile, cb) => {
  // User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //   return cb(err, user);
  console.log("successfully login",profile)
      // Store the AES key in the MongoDB database
      // const userDocument = new USER({ name: profile.displayName.toString('hex') });
      // userDocument.save();
  // });
}
))

app.get("/facebook", passport.authenticate("facebook", {
  scope: ["email"]
}))

// app.get("/auth/google/callback",passport.authenticate("google"))
app.get('/facebook/callback',
  passport.authenticate('facebook',{

  }))

const port = process.env.PORT || 3000
app.listen(port)