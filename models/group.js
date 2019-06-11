var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;


var userSchema = new Schema({
   useremail: {type: String, required: true},
   groupname: {type: String, required: true},
   groupurl : {type: String, required: true, unique:true},
   groupinfo: {type: String, required: true},
   grouptype : [ String ],
   groupplatform: {type: String, required: true},
   date:{ type : Date, default: Date.now },

});

module.exports = mongoose.model('Groups', userSchema);

//module.exports = mongoose.model('Groups', userSchema, "userSchema");

