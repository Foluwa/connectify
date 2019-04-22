const express = require('express');
var Groups = require('../models/group');
var Subscribers = require('../models/subscribers');


//USER DASHBOARD
exports.dashboard = (req,res,next) => {
			var successMsg = req.flash('success')[0];
			console.log("dashboard page");
			var user = req.user.email;
			var name = req.user.name;
			console.log(user + ' and ' + name);
			var productChunks = [];
			
			Groups.find({useremail: user}).then((result) => {
				if(result){
					for (var i = 0; i < result.length; i++) {
					productChunks.push([result[i]]);
					}
				}
				res.render('main/dashboard',{ 
					user: req.user.email,
					groups: productChunks,
					csrfToken: req.csrfToken(),
					name:name 
			});		
		});
}

//DISPLAY SEARCH PAGE
exports.search = (req,res,next) => {
		var noMatch = null;
		if(req.query.groupplatform) {
				//const regex = new RegExp(escapeRegex(req.query.groupplatform), 'gi');  //search
				let regex = req.query.groupplatform;   //search
				console.log(regex);
				// Get all campgrounds from DB
				Groups.find({groupplatform: regex}, function(err, allCampgrounds){
					if(err){
							console.log(err);
					} else {
							if(allCampgrounds.length < 1) {
									noMatch = "No campgrounds match that query, please try again.";
							}
							console.log(allCampgrounds);
							res.render("main/search",{campgrounds:allCampgrounds, noMatch: noMatch});
					}
				});
		} else {
				// Get all campgrounds from DB
				Groups.find({}, function(err, allCampgrounds){
					if(err){
							console.log(err);
					} else {
						console.log(allCampgrounds);
							res.render("main/search",{campgrounds:allCampgrounds, noMatch: noMatch});
					}
				});
		}

}

//DISPLAY POPULAR SEARCHES
exports.popular = (req,res,next) => {
	console.log(req.params.id);
	var noMatch = null;
		if(req.params.id) {
				//const regex = new RegExp(escapeRegex(req.params.id), 'gi');  //search
				let regex = req.params.id;   //search
				console.log(regex);
				// Get all campgrounds from DB
				Groups.find({groupplatform: regex}, function(err, allCampgrounds){
					if(err){
							console.log(err);
					} else {
							if(allCampgrounds.length < 1) {
									noMatch = "No campgrounds match that query, please try again.";
							}
							console.log(allCampgrounds);
							res.render("main/search",{campgrounds:allCampgrounds, noMatch: noMatch});
					}
				});
		} else {
				// Get all campgrounds from DB
				Groups.find({}, function(err, allCampgrounds){
					if(err){
							console.log(err);
					} else {
						console.log(allCampgrounds);
							res.render("main/search",{campgrounds:allCampgrounds, noMatch: noMatch});
					}
				});
		}

	
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

		Groups.findOne({groupurl : req.body.groupurl}, function(err, user){
			if(err){
				//IF ERROR
				console.log('error  occured');
			}
			//if a user was found, that means the user's email matches the entered email
			if (user) {
				console.log('That address has already been registered.');
				//SEND HTTP CODE FOR NOT DONE
				res.send('That address has already been registered.');

			}
			else{
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
	
	}
});
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
		});
		console.log("Your email is " + req.body.email);
		//CHECK IF EMAIL ALREADY EXISTS
		
		//subscriber.save();
	 
}

//EDIT GROUP DETAILS
exports.edit = (req,res,next) => {
		    // FIND AND UPDATE GROUP
				Groups.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
					if(err){
							res.redirect("/dashboard");
					} else {
							//redirect somewhere(show page)
							res.redirect("/dashboard/" + req.params.id);
					}
			 });
}

//DELETE GROUP DETAILS
exports.delete = (req,res) => {
	//FIND AND DELETE GROUP
	console.log("Your id is " + req.params.id)
	Groups
	 .findByIdAndRemove(req.params.id)
	.exec()
	.then(doc => {
		if(!doc) {
			return res.status(404).end(); 
		}
		res.redirect("/dashboard");
		return res.status(204).end();

	})
	.catch(err => next(err));
	
 }


