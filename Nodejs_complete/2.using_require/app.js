console.log("starting app");
const fs = require ('fs');
const os = require ('os');
const notes = require('./notes.js')
var user = os.userInfo();

console.log(user);

//fs.appendFileSync('greetings.txt', `Hello World !`);

// below function works only on version 7 and above
/*
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
}); */

/*fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {

    if (err){
      conslole.log('únable to append to file');
  } } ); */

  console.log('Result:', notes.add(9, -2));