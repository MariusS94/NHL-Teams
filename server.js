const express = require("express");
const app = express();

const port = 3000;

function main() {
  app.get("/teams", (request, response) => {
    response.send(`hi`);
  });

  app.listen(port, function () {
    console.log(`listening on ${port}`);
  });
}

main();
