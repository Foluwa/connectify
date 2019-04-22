const express = require('express');
const router = express.Router();
var passport = require('passport');
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

const Controller = require('../controller/controller.js');
var Groups = require('../models/group');

/* GET HOME PAGE. */
router.get('/', (req, res, next) => {
    //CHCHE FROM SERVER
        res.set('Cache-Control', 'public, max-age= 3000, s-maxage=6000');
        var successMsg = req.flash('success')[0];

        Groups.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 300;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('main/index',{
        title: 'Homepage | Connectify',
         groups:productChunks,
         user: req.user,
         csrfToken: req.csrfToken(),
         successMsg: successMsg, 
         noMessages: !successMsg 
        });
    });
});

//PAGE TO GET DASHBOARD
router.get('/dashboard', isLoggedIn, Controller.dashboard, (req, res, next) => {});

//PAGE TO POST DASHBOARD
router.post('/dashboard', (req, res, next) => {
    res.render('main/dashboard',{user: req.user.email,csrfToken: req.csrfToken(),name:name 
    });
});

//DISPLAY CONNECTS
router.get('/search', Controller.search, (req, res, next) => {});

//DISPLAY ABOUT
router.get('/about', Controller.about, (req, res, next) => {});

//DISPLAY ABOUT
router.get('/forgot-password', Controller.forgotpassword, (req, res, next) => {});

//SUBMIT GROUPS
router.post('/submit-groups', Controller.dashboardGroupSubmit, (req, res, next) => {});

//SUBSCRIBE FOR NEWS LETTER
router.post('/subscription', Controller.subscription, (req, res, next) => {});

// UPDATE GROUPS
router.put("/edit/:id",Controller.edit, (req, res) => {

});

// DELETE GROUPS
router.get("/delete/:id",Controller.delete, (req, res) => {
   
});

//LOG USER OUT
router.get('/logout', isLoggedIn, (req, res, next) => {
    req.logout();
    res.redirect('/');
});

//NOT LOGGED IN
router.use('/', notLoggedIn, (req, res, next) => {
    next();
});

//DISPLAY SIGN UP
router.get('/signup', (req, res, next) => {
    var messages = req.flash('error');
        res.render('main/index', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

//DISPLAY SIGNUP
router.post('/signup', passport.authenticate('local.signup', {
    failureRedirect: '/signup',
    failureFlash: true
    }), (req, res, next) => {
        //
    console.log("Your email is "+req.body.email);
    if (req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else {
        res.redirect('main/dashboard');
    }
});

//GET REQUEST TO SIGN IN
router.get('/signin', (req, res, next) => {
    var messages = req.flash('error');
        res.render('main/dashboard', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

//POST TO SIGNIN
router.post('/signin', passport.authenticate('local.signin', {
    failureRedirect: '/signin',
    failureFlash: true
}), (req, res, next) => {
    console.log("Your email is "+req.body.email);
    if (req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else { 
        res.redirect('/dashboard');
    }
});



//ERROR PAGE
router.get('*', Controller.error_page, (req, res, next) => {});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}