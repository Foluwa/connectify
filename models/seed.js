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

    new Groups({
        useremail: 'moronfoluwaakintola@gmail.com',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }),
    new Groups({
        useremail: 'moronfoluwaakintola@gmail.com',
        groupname: '',
        groupurl : '',
        groupinfo:'' ,
        grouptype :'' ,
        groupplatform: '' 
    }),
    new Groups({
        useremail: 'moronfoluwaakintola@gmail.com',
        groupname: 'Codingcoach Facebook',
        groupurl : 'https://www.facebook.com/codingcoachio/',
        groupinfo:'Coding Coach is a free, open-source platform which aims to connect software developers and mentors all over the world. It is built by a group of talented and passionate developers, designers, engineers, and humans who want to make the engineering world a better place to collaborate. This project was born out of a desire to provide a platform to connect mentors and mentees throughout the world at no cost. Coding Coach is created by the people, for the people.' ,
        grouptype :'[Programming, Mentorship]' ,
        groupplatform: 'Facebook' 
    }),
    new Groups({
        useremail: 'moronfoluwaakintola@gmail.com',
        groupname: 'Codingcoach',
        groupurl : 'https://join.slack.com/t/coding-coach/shared_invite/enQtNDYxNTcwMjk4MDcwLThiZjY1MTM2YTU1YzM2MGI1N2Y1NDI3ZGM1MGRhNjdiZjU0MzE1YjMxZjdlZmVlNDdhNmFhN2RhNGIxZmE1YTI',
        groupinfo:'Coding Coach is a free, open-source platform which aims to connect software developers and mentors all over the world. It is built by a group of talented and passionate developers, designers, engineers, and humans who want to make the engineering world a better place to collaborate. This project was born out of a desire to provide a platform to connect mentors and mentees throughout the world at no cost. Coding Coach is created by the people, for the people.' ,
        grouptype :'[Programming, Mentorship, Coding, Community, ]' ,
        groupplatform: 'Slack' 
    }),
    new Groups({
        useremail: 'moronfoluwaakintola@gmail.com',
        groupname: 'DEFCON FORUM',
        groupurl : 'https://forum.defcon.org/',
        groupinfo:'DEF CON related announcements about web sites or services and things not directly related to any specific DEF CON convention.' ,
        grouptype :'[Hacking, Security, Defcon, Convention]' ,
        groupplatform: 'Defcon' 
    }),
    new Groups({
        useremail: 'moronfoluwaakintola@gmail.com',
        groupname: 'Business Casual',
        groupurl : 'https://www.reddit.com/r/businesscasual',
        groupinfo:'Welcome to the official subreddit for the YouTube channel Business Casual! Here you can discuss and share anything related to the channel, for example its latest videos or any suggestions you may have.' ,
        grouptype :'[Business, Casual, Wealth,]' ,
        groupplatform: 'Reddit' 
    }),
    new Groups({
        useremail: 'moronfoluwaakintola@gmail.com',
        groupname: 'Lets Flutter with Dart',
        groupurl : 'https://m.facebook.com/groups/425920117856409',
        groupinfo:'Welcome to the Lets flutter & dart group. This group is for all the devs who want to learn or explore flutter. People here can ask for help or also can help others. Thanks, Keep Fluttering !!!' ,
        grouptype :'[Programming, Dart, Flutter, Mobile App Development]' ,
        groupplatform: 'Facebook' 
    }),
    new Groups({
        useremail: 'moronfoluwaakintola@gmail.com',
        groupname: 'Redit Nigeria',
        groupurl : 'https://www.reddit.com/r/nigeria',
        groupinfo:'This sub is about Nigeria (Nigerian life, geopolitics, sports, culture and history), and about Nigerians in the diaspora. It is also a light-hearted sub in the usual Naija fashion. Everyone is welcome to contribute. Please subscribe so we can continue to grow as a community.' ,
        grouptype :'[Nigeria, African]' ,
        groupplatform: 'Reddit' 
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
