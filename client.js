const net = require("net");
const { IP, PORT } = require("./constants");

// establishes connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  console.log("Connecting to localhost:50541");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  //immediately upon connecting, send initials to server
  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server.");
    conn.write("Name: KLK");
    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
}
