const express = require('express');
var Groups = require('../models/group');
var Subscribers = require('../models/subscribers');


//USER DASHBOARD
exports.dashboard = (req,res,next) => {
	console.log("dashboard page");
	var user = req.user.email;
	var name = req.user.name;
	console.log(user + ' and ' + name);

	var successMsg = req.flash('success')[0];
	var productChunks = [];
	
	Groups.find({useremail: user}).then((result) => {
		if(result){
			for (var i = 0; i < result.length; i++) {
			productChunks.push([result[i]]);
			}
		}

		res.render('main/dashboard',
		{ 
			user: req.user.email,
            groups: productChunks,
			csrfToken: req.csrfToken(),
			name:name 
	});

 
});
}


//DISPLAY SEARCH PAGE
exports.search = (req,res,next) => {
	console.log("search page");
	 
	let grouptype =  req.query.grouptype;
	let groupplatform =  req.query.groupplatform;

	Groups.find({ groupplatform })
    .then((result)=>{
        // res.json(result)
        var productChunks =  [];
        var chunkSize = 300;
        for(var i=0; i < result.length; i += chunkSize){
          productChunks.push(result.slice(i, i+chunkSize)); 
        }
        res.render('main/search',{
					grouptype: `${grouptype}`,
          groupplatform: `${groupplatform}`,
          prop:  productChunks 
        });
    })
    .catch(err=>{
        res.send(err)
    })
	// res.render('main/search');
}

//DISPLAY ABOUT
exports.about = (req,res,next) => {
	console.log("about page");
	 res.render('main/about');
}

//FORGOT PASSWORD
exports.forgotpassword = (req,res,next) => {
	console.log("forgot password");
	 res.render('main/forgot_password');
}

//ERROR 404 PAGE
exports.error_page = (req,res,next) => {
	console.log("error 404 page");
	 res.render('main/error');
}

//GROUP DATA SUBMISSION
exports.dashboardGroupSubmit = (req,res,next) => {
	
	console.log("dashboardGroup Submit page");
	var user = req.user.email;
	var name = req.user.name;
	//FORM DETAILS


	console.log("The user's user " + req.user ) ;
	
	    var group = new Groups({ 
		    groupname: req.body.groupname,
		    groupurl : req.body.groupurl,
		    groupinfo: req.body.groupinfo,
		    grouptype : req.body.grouptype,
			groupplatform: req.body.groupplatform,
			useremail:req.body.useremail
	});
	console.log(group);
	group.save()
	.then(data => {
		console.log('Saving to database');
		//res.send(data);
		console.log('Product Created successfully');
		}).catch(err => {
		res.status(500).send({
		message: err.message
	 });
	})
	.catch((error) => {
	  console.log(error);
	});

//res.redirect('/dashboard');

}

//SUBSCRIBE TO NEWSLETTER
exports.subscription = (req,res,next) => {
	var subscriber = new Subscribers({
		 email : req.body.email
	});
	Subscribers.findOne({email : req.body.email}, function(err, user){
		if(err){
			//IF ERROR
			console.log('error  occured');
		}
		//if a user was found, that means the user's email matches the entered email
		if (user) {
			console.log('A user with that email has already registered.');
			//use connect flash
		 //err.status = 400;
		  res.redirect('/');
		 return next(err);
		} else {
				//code if no user with entered email was found
				subscriber.save();
				res.redirect('/');
		}
	})
	console.log("Your email is " + req.body.email);
	//CHECK IF EMAIL ALREADY EXISTS
	
	//subscriber.save();
	 
}
