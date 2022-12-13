const net = require("net");
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, messageKeys } = require("./constants");

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
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  };
  if (key === messageKeys[h]) {
    connection.write("Say: you're hisstory");
  };
  if (key === messageKeys[j]) {
    connection.write("Say: addercadabra");
  };

};

 module.exports = {
  setupInput
 }