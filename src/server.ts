import app from "./app";
require("console-info");
var config = require("config");

// use this only if not passing the `-r dotenv/config` option for npm/node
//require("dotenv").config();

// console.info(`dotENV: ${process.env.NODE_ENV}`);
// console.info("NODE_ENV: " + config.util.getEnv("NODE_ENV"));

const port:number = config.get("app.port");

app.listen(port, () => {
    console.info(`ReceipeAPI app listening on ${port}!`);
    console.info("  Press CTRL-C to stop\n");
  });