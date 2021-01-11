const express = require("express");
const bp = require('body-parser')
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path")
const db = require("./db");
const routes = require("./routes");
const User = require("./models/User")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const app = express();


// Passport
app.use(cookieParser());
app.use(session({ secret: "bootcamp" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Routes
app.use("/api", routes)
app.use("/images", express.static(path.join(__dirname, "images")))

// Local Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) return done(null, false);
          user
            .hash(password, user.salt)
            .then((hash) =>
              hash !== user.password ? done(null, false) : done(null, user)
            );
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  if(user.id){
    User.findByPk(user.id)
    .then((user) => done(null, user)).catch(done);
  }  
});

//Server & data base setting
db.sync({ force: false })
  .then(() =>
    app.listen(8000, () => {
      console.log("Server listening on port 8000");
    })
  )
  .catch((err) => console.log(err));
