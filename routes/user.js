const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsyc = require("../utils/wrapAsyc.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userControllers = require("../controllers/users.js")

router
  .route("/signup")
  .get((req, res) => {
    res.render("user/signup.ejs")})
   .post( wrapAsyc(userControllers.signup));

router
  .route("/login")
  .get(userControllers.renderLoginForm)
  .post(
  saveRedirectUrl,
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
  userControllers.login,);

router.get("/logout", userControllers.logout);

module.exports = router;