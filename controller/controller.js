const express = require('express');
var Groups = require('../models/group');


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


//DISPLAY CONNECTS
exports.connects = (req,res,next) => {
	console.log("connects page");
	 res.render('main/connects');
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