const express = require('express');
const router = express.Router();
const Controller = require('../controller/controller.js');

/* GET HOME PAGE. */
router.get('/', function (req, res, next) {
        res.render('main/index');
});

//USER SIGN-IN ROUTE
router.get('/signin', Controller.signin, function(req, res, next) {});

//USER SIGN-UP ROUTE
router.get('/signup', Controller.signup, function(req, res, next) {});

//PAGE TO GET DASHBOARD
router.get('/dashboard', Controller.dashboard, function(req, res, next) {});

//DISPLAY CONNECTS
router.get('/connects', Controller.connects, function(req, res, next) {});

module.exports = router;

