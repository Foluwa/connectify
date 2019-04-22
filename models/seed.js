var mongoose = require('mongoose');
var Groups = require('./group');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true }).then(
  (res) => {
   console.log("Connected to Database Successfully.");
  }
).catch(() => {
  console.log("Connection to Database failed.");
});

var hostels = [ 
//CHANGE GROUP TYPE TO GROUP TAGS
    
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: 'moronfoluwaakintola@gmail.com',
        groupname: 'Jamstack',
        groupurl : 'https://gitter.im/jamstack/community',
        groupinfo:'A place to discuss all things JAMstack. Ask questions, make connections, start meet up groups, and spread the JAM!' ,
        grouptype :'[community,Javascript, Developers,]' ,
        groupplatform: 'jamstack' 
    }), 
    new Groups({
        useremail: '',
        groupname: 'JavaScripters',
        groupurl : 'https://chat.whatsapp.com/JCIr3zpcbeT7NLbjOf4nmb',
        groupinfo:'JavaScripters is a group where members share ideas, solve questions, conduct tutorials/workshops and inspire one another towards the common goal of developing themselves and becoming an outstanding developer in the IT World.' ,
        grouptype :'[]' ,
        groupplatform: 'Whatsapp' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 
    new Groups({
        useremail: '',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }), 


];

var done = 0;
for (var i = 0; i < hostels.length; i++){
    hostels[i].save(function(){
        done++;
        if(done === hostels.length){
            exit();
    }   
 });
}

function exit(){
    mongoose.disconnect(); 
}
