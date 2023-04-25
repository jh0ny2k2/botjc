const express = require("express");
const server = express();

server.all("/", (req, res) => {
    res.send("bot encendido");
});

function keepAlive() {
    server.listen(3000, () => { console.log("bot listo")});
}

module.exports = keepAlive;