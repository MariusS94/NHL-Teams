const express = require("express");
const { fetchTeamInfo } = require("./src/api/nhl-fetch");
const app = express();

const port = 3000;

function main() {
  app.get("/teams", async (request, response) => {
    const teamsData = await fetchTeamInfo();
    console.log(teamsData);
    response.send(teamsData);
  });

  app.listen(port, function () {
    console.log(`listening on ${port}`);
  });
}

main();
