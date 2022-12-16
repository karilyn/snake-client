const net = require("net");
const { IP, PORT } = require("./constants");

// establishes connection with game server
const connect = function() {
  const client = net.createConnection({
    host: IP,
    port: PORT
  });
  console.log(`Connecting to ${IP}:${PORT}`);
  // interpret incoming data as text
  client.setEncoding("utf8");

  //immediately upon connecting, send initials to server
  client.on("connect", (connect) => {
    console.log("Successfully connected to game server.");
    client.write("Name: KLK");
  });


  return conn;
};

// we need to listen for an event saying a message has come through
client.on("data", (message) => {
  console.log("Server says: ", message);
});

client.on("end", () => {
  console.log("Connection to server ended.");
  process.exit()
})


module.exports = {
  connect
}
