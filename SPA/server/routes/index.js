var express = require('express');
var router = express.Router();
var passport = require('passport');


/* GET HOME. */
router.get('/', (req, res, next) => {})

/* GET SEARCH. */
router.get('/search', (req, res, next) => {})

/* POST SEARCH. */
router.post('/search', (req, res, next) => {})

/* GET PROFILE. */
router.get('/profile', (req, res, next) => {})

/* POST CREATE GROUP. */
router.post('/create', (req, res, next) => {})

/* EDIT GROUP. */
router.post('/edit/:id', (req, res, next) => {})

/* DELETE DELETE. */
router.post('/delete/:id', (req, res, next) => {})

//ERROR 404 ROUTES
router.get('*', (req, res, next) => {})

module.exports = router;