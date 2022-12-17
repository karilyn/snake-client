const { read } = require("fs");
const net = require("net");
const { IP, PORT } = require("./constants");



// establishes connection with game server
const client = net.createConnection({
  host: IP,
  port: PORT
});

const connect = function() {

  console.log(`Connecting to ${IP}:${PORT}`);
  // set encoding to interpret incoming data as text
  client.setEncoding("utf8");

  //immediately upon connecting, send initials to server
  client.on("connect", (connect) => {
    console.log("Successfully connected to game server.");
    client.write(`Name: ${name}`);
  });


  return client;
};

// we need to listen for an event saying a message has come through
client.on("data", (message) => {
  console.log("Server says: ", message);
});

// added a process exit
client.on("end", () => {
  console.log("Connection to server ended.");
  process.exit()
})


module.exports = {
  connect
}
