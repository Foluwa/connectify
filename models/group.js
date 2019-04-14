var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
   useremail: {type: String, required: true},
   groupname: {type: String, required: true},
   groupurl : {type: String, required: true},
   groupinfo: {type: String, required: true},
   grouptype : {type: String, required: true},
   groupplatform: {type: String, required: true}

});


module.exports = mongoose.model('Groups', userSchema);