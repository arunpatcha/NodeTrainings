console.log("starting app.js");
const fs = require ('fs');
const os = require ('os');
var user = os.userInfo();

console.log(user);

//fs.appendFileSync('greetings.txt', `Hello World !`);

// below function works only on version 7 and above

fs.appendFile( 'greetings.txt', `Hello World !` , function(err) {

    if (err){
        conslole.log('únable to append to file');
    }
});

// using OS module 
fs.appendFile('greetings.txt', `Hello ${user.username}!` , function(err){

      if (err){
        conslole.log('únable to append to file');
    }  
});