"use strict";

process.title ="Calculator";
//this selects the items you want to use from the input
const  {argv: [,, ...args] } = process,
      {calc} = require("./calc");
      calc(args);

console.log(calc(args));
//does this file even need a test?  How would that work?
