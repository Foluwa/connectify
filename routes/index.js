const express = require('express');
const router = express.Router();
var passport = require('passport');


const hbs = require('hbs');

var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

const Controller = require('../controller/controller.js');
var Groups = require('../models/group');

/* GET HOME PAGE. */

router.get('/', function (req, res, next) {
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




/*
router.get('/', function (req, res, next) {
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

*/

//PAGE TO GET DASHBOARD
router.get('/dashboard', isLoggedIn, Controller.dashboard, function(req, res, next) {});

//PAGE TO POST DASHBOARD
router.post('/dashboard', function(req, res, next) {
    res.render('main/dashboard',{user: req.user.email,csrfToken: req.csrfToken(),name:name 
    });
});

//DISPLAY CONNECTS
router.get('/search', Controller.search, function(req, res, next) {});

//POPULAR SEARCHES
router.get('/popular-searches/:id', Controller.popular, function(req, res, next) {});


//DISPLAY ABOUT
router.get('/about', Controller.about, function(req, res, next) {});

//DISPLAY ABOUT
router.get('/forgot-password', Controller.forgotpassword, function(req, res, next) {});

//SUBMIT GROUPS
router.post('/submit-groups', Controller.dashboardGroupSubmit, function(req, res, next) {});

//SUBSCRIBE FOR NEWS LETTER
router.post('/subscription', Controller.subscription, function(req, res, next) {});

// UPDATE GROUPS
router.put("/edit/:id",Controller.edit, function(req, res){

});
 
// DELETE GROUPS
router.get("/delete/:id",Controller.delete, function(req, res){
   
});

//LOG USER OUT
router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

//NOT LOGGED IN
router.use('/', notLoggedIn, function (req, res, next) {
    next();
});

//DISPLAY SIGN UP
router.get('/signup', function (req, res, next) {
    var messages = req.flash('error');
        res.render('main/index', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

//DISPLAY SIGNUP
router.post('/signup', passport.authenticate('local.signup', {
    failureRedirect: '/', // /signup
    failureFlash: true
    }), function (req, res, next) {
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
router.get('/signin', function (req, res, next) {
    var messages = req.flash('error');
        res.render('main/dashboard', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

//POST TO SIGNIN
router.post('/signin', passport.authenticate('local.signin', {
    failureRedirect: '/', // /signin
    failureFlash: true
}), function (req, res, next) {
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
router.get('*', Controller.error_page, function(req, res, next) {});

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