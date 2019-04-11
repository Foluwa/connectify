const express = require('express');
const router = express.Router();
const Controller = require('../controller/controller.js');

/* GET HOME PAGE. */
router.get('/', function (req, res, next) {
        res.render('main/index');
});

//PAGE TO GET DASHBOARD
router.get('/dashboard', Controller.dashboard, function(req, res, next) {});

//DISPLAY CONNECTS
router.get('/connects', Controller.connects, function(req, res, next) {});

//DISPLAY ABOUT
router.get('/about', Controller.about, function(req, res, next) {});

//DISPLAY ABOUT
router.get('/about', Controller.forgotpassword, function(req, res, next) {});

//ERROR PAGE
router.get('*', Controller.error_page, function(req, res, next) {});

module.exports = router;

