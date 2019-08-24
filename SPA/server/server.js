const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
var mongoose = require('mongoose');

var routes = require('./routes/index');

// LOAD ENV
dotenv.config({
    path: './config.env'
});

const app = express();

// DATABASE CONNECTION
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true
}).then(
    (res) => {
        console.log("Connected to Database Successfully.");
    }
).catch((err) => {
    console.log("Connection to Database failed. " + err);
});

// Dev logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// ROUTES
app.use('/', routes);


// Handle production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});