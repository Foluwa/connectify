const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const mongoose = require('mongoose');
const validator = require('express-validator');
const MongoStore = require('connect-mongo')(session);
const router = express.Router();
//ROUTES
const routes = require('./routes/index');
const app = express();
const port =process.env.PORT || 3009;

mongoose.Promise = global.Promise;
//mongodb://foluwa:foluwa2018@ds151814.mlab.com:51814/connectify
//"mongodb://localhost/connectify
mongoose.connect("mongodb://localhost/connectify", { useNewUrlParser: true}).then(
  function(res){
   console.log("Connected to Database Successfully.");
  }
).catch(function(){
  console.log("Connection to Database failed. " + console.error);
});
require('./config/passport');


//LOG EVERY REQUEST THAT COMES IN
// app.use((req,res,next)=>{
// 	console.log(`${new Date().toString()} => ${req.originalUrl}`);
// 	next();
// });

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));//favicon.ico
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysupersecret', 
  resave: false, 
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
});
app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = router;