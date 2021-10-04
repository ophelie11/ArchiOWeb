// Require the operating system core module
const os = require('os'); //module os

exports.theMeaningOfLife = 42;

exports.hello = function(name) {
  console.log(`Hello ${name}!`);
  console.log(`I am running on ${os.platform()}`);
}