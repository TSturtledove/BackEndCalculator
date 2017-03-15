"use strict";

const {addfinal} = require("../lib/add"),
      {subfinal} = require("../lib/sub"),
      {mulfinal} = require("../lib/mul"),
      {divfinal} = require("../lib/div");
// const answer

const calc = ([fi, op, sec]) => {
  fi = parseInt(fi)
  sec = parseInt(sec)
  // console.log("hi yo");
  if(op == "+") {
    // let answer = addfinal(fi, sec);
    // console.log("hi there");
    // return answer;
    return addfinal(fi, sec);
  } else if(op == "-") {
    return subfinal(fi, sec);
  }  else if(op == "*") {
    return mulfinal(fi, sec);
  } else if(op == "/") {
    return divfinal(fi, sec);
  };
  return fi, op, sec;
};

// const calculateadd = (fi, sec) => {
//
//   return addfinal(fi, sec);
// };
//
// const calculatemin = (fi, sec) => {
//   return subfinal(fi, sec);
// };
//
// const calculatemul = (fi, sec) => {
//   return mulfinal(fi, sec);
// };
//
// const calculatediv = (fi, sec) => {
//   return divfinal(fi, sec);
// };

module.exports = { calc }//must come last in the whole page
