
//USER DASHBOARD
exports.dashboard = (req,res,next) => {
	console.log("dashboard");
	 res.render('main/dashboard');
}

//DISPLAY CONNECTS
exports.connects = (req,res,next) => {
	console.log("connects");
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