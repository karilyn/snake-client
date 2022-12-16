const net = require("net");
const {
  KEY_MAP,
  messageKeys
} = require("./constants");

// Stores the active TCP connection object. In outer-most scope so it can be used by all functions
let connection;

// setup interface to handle user input from stdin
// setupInput accepts the conn object to interact with the server
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// handleUserInput doesn't need to be exported because it's only called by setupInput which is already in the same file
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
//  console.log(key);
  if (key === '\u0003') {
    process.exit();
  }

  // use the exported KEY_MAP
  let instruction = KEY_MAP[key];

  //If instruction is not undefined, do whatever the value of the key is
  if (instruction !== undefined){
    connection.write(instruction);
    return;
  }
 };

 module.exports = {
  setupInput
 }