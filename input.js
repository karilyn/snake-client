const net = require("net");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// handleUserInput doesn't need to be exported because it's only called by setupInput which is already in the same file
 const handleUserInput = function () {
   // \u0003 maps to ctrl+c input
   if (key === '\u0003') {
     process.exit();
   }
 };

 module.exports = {
  setupInput
 }