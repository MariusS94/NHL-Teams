const express = require("express");
const { fetchTeamInfo, fetchTeamDetails } = require("./src/api/nhl-fetch");

const app = express();

const port = 3000;

/* const cors = require("cors"); */

function main() {
  /* app.use(cors()); */

  app.get("/teams", async (request, response) => {
    const teamsData = await fetchTeamInfo();
    console.log(teamsData);
    response.send(teamsData);
  });

  app.get("/teams/:teamId", async (request, response) => {
    const { teamId } = request.params;
    const teamDetails = await fetchTeamDetails(teamId);
    console.log(teamDetails);

    response.send(teamDetails);
  });

  app.listen(port, function () {
    console.log(`listening on ${port}`);
  });
}

main();
