//USER SIGN-IN 
exports.signin = (req,res,next) => {
	console.log("signin");
	 res.render('main/sign-in');
}

//USER SIGN-UP
exports.signup = (req,res,next) => {
	console.log("signup");
	  res.render('main/sign-up');
}

//USER DASHBOARD
exports.dashboard = (req,res,next) => {
	console.log("dashboard");
	 res.render('main/dashboard');
}

//DISPLAY CONNECTS
exports.connects = (req,res,next) => {
	console.log("dashboard");
	 res.render('main/connects');
}