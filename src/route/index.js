// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

router.get("/", function (req, res) {
  return res.render("index", {
    name: "index",
    component: [],
    title: "Index page",
    data: {},
  });
});

router.get("/home", function (req, res) {
  return res.render("home", {
    name: "home",
    component: [],
    title: "Home page",
    data: {},
  });
});

router.get("/logout", function (req, res) {
  return res.render("logout", {
    name: "logout",
    component: [],
    title: "Logout page",
    data: {},
  });
});

const auth = require('./auth')

const user = require("./user");

router.use("/", auth);

router.use("/", user);

// Експортуємо глобальний роутер
module.exports = router
