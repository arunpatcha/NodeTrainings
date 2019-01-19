console.log("starting app");
"use strict";
const fs = require ('fs');
const os = require ('os');
const notes = require('./notes.js')
const _ = require('lodash');
var user = os.userInfo();

console.log(user);

/*fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {

    if (err){
      conslole.log('únable to append to file');
  } } ); 

  console.log('Result:', notes.add(9, -2)); */

  // Using 3rd party module 

  //console.log(_.isString(true));
  //console.log(_.isString('Árun'));
var filteredArray = _.uniq(['arun', 1, 2, 'arun' , 1, 2, 3, 4, 5, 6, 7, 8]);
console.log(filteredArray);