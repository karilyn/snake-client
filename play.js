const net = require("net");

// Get the networking stuff
const { connect } = require("./client");

// Get the keyboard stuff
const { setupInput } = require("./input");

console.log("Connecting ...");
let connection = connect();

setupInput(connection);
