var mongoose = require('mongoose');
var Groups = require('./group');

//mongodb://foluwa:foluwa2018@ds151814.mlab.com:51814/connectify
//mongodb://foluwa:foluwa2018@ds151814.mlab.com:51814/connectify
//mongodb://localhost:27017/shopping
mongoose.connect('mongodb://foluwa:foluwa2018@ds151814.mlab.com:51814/connectify', { useNewUrlParser: true }).then(
  (res) => {
   console.log("Connected to Database Successfully.");
  }
).catch(() => {
  console.log("Connection to Database failed.");
});

var hostels = [ 
//CHANGE GROUP TYPE TO GROUP TAGS

//DATA INSERTED
 
    // new Groups({
    //     useremail: 'moronfoluwaakintola@gmail.com',
    //     groupname: 'Jamstack',
    //     groupurl : 'https://gitter.im/jamstack/community',
    //     groupinfo:'A place to discuss all things JAMstack. Ask questions, make connections, start meet up groups, and spread the JAM!' ,
    //     grouptype :'[community,Javascript,Developers,]' ,
    //     groupplatform: 'Gitter' 
    // }), 
    // new Groups({
    //     useremail: 'moronfoluwaakintola@gmail.com',
    //     groupname: 'JavaScripters',
    //     groupurl : 'https://chat.whatsapp.com/JCIr3zpcbeT7NLbjOf4nmb',
    //     groupinfo:'JavaScripters is a group where members share ideas, solve questions, conduct tutorials/workshops and inspire one another towards the common goal of developing themselves and becoming an outstanding developer in the IT World.' ,
    //     grouptype :'[Javascript,Community,Programming,Whatsapp]' ,
    //     groupplatform: 'Whatsapp' 
    // }), 
    // new Groups({
    //     useremail: 'moronfoluwaakintola@gmail.com',
    //     groupname: 'IBM DIGITAL - NATION AFRICA',
    //     groupurl : 'https://www.facebook.com/groups/455667194845677',
    //     groupinfo:'Our mission is to empower African youth with digital skills and tools to help improve their lives and provide access to a wider range of opportunities.' ,
    //     grouptype :'[Community,Programming,Self Development,Education,Artificial Intelligence,Facebook]',
    //     groupplatform: 'Facebook' 
    // }), 
    // new Groups({
    //     useremail: 'moronfoluwaakintola@gmail.com',
    //     groupname: 'Vue Land',
    //     groupurl : 'https://discordapp.com/invite/HBherRA',
    //     groupinfo:'This will be a community-driven server so feel free to suggest new text channels, better server names, nice logos, or anything else you think would improve it for everyone. Roles are being created for mods, trusted users, etc. As with all communities, we have a few rules to keep things friendly.' ,
    //     grouptype :'[Community,Coding,Vue,Javascript,Jobs,Web]' ,
    //     groupplatform: 'Discord' 
    // }), 
    // new Groups({
    //     useremail: 'moronfoluwaakintola@gmail.com',
    //     groupname: 'Bcoin',
    //     groupurl : 'http://bcoin.io/slack-signup.html',
    //     groupinfo:'Bcoin is an alternative implementation of the bitcoin protocol, written in node.js.Join us on the bcoin development Slack!' ,
    //     grouptype :'Slack' ,
    //     groupplatform: '[Bitcoin,Wallet,Cryptocurrency,Mining,Javascript]' 
    // }), 
    // new Groups({
    //     useremail: '',
    //     groupname: '',
    //     groupurl : '',
    //     groupinfo:'' ,
    //     grouptype :'' ,
    //     groupplatform: '' 
    // }), 
    // new Groups({
    //     useremail: '',
    //     groupname: '',
    //     groupurl : '',
    //     groupinfo:'' ,
    //     grouptype :'' ,
    //     groupplatform: '' 
    // }), 
    // new Groups({
    //     useremail: '',
    //     groupname: '',
    //     groupurl : '',
    //     groupinfo:'' ,
    //     grouptype :'' ,
    //     groupplatform: '' 
    // }), 
    // new Groups({
    //     useremail: '',
    //     groupname: '',
    //     groupurl : '',
    //     groupinfo:'' ,
    //     grouptype :'' ,
    //     groupplatform: '' 
    // }), 
    // new Groups({
    //     useremail: '',
    //     groupname: '',
    //     groupurl : '',
    //     groupinfo:'' ,
    //     grouptype :'' ,
    //     groupplatform: '' 
    // }), 
    // new Groups({
    //     useremail: '',
    //     groupname: '',
    //     groupurl : '',
    //     groupinfo:'' ,
    //     grouptype :'' ,
    //     groupplatform: '' 
    // })

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
