const { read } = require("fs");
const net = require("net");

// Get the networking stuff
const { connect } = require("./client");

// Get the keyboard stuff
const { setupInput } = require("./input");


let connection = connect();

setupInput(connection);
