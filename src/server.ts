import app from "./app";

require("console-info");

const port:number = 8080;

app.listen(port, () => {
    console.info(`ReceipeAPI app listening on ${port}!`);
    console.info("  Press CTRL-C to stop\n");
  });