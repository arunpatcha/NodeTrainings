console.log("starting app");
"use strict";
const fs = require ('fs');
const notes = require('./notes.js')
const _ = require('lodash');
var filteredArray = _.uniq(['Mike']);
console.log(filteredArray);