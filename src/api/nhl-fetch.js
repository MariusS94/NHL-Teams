const fetch = require("node-fetch");

async function fetchTeamInfo() {
  const respond = await fetch("https://statsapi.web.nhl.com/api/v1/teams");

  if (!respond.ok) {
    throw new Error(respond);
  }

  const result = await respond.json();

  const team = result.teams.map((teamdata) => ({
    name: teamdata.name,
    id: teamdata.id,
  }));

  console.log(team);
  return team;
}

async function fetchTeamDetails(teamId) {
  console.log(teamId);
  const respond = await fetch(
    `https://statsapi.web.nhl.com/api/v1/teams/${teamId}`
  );
  if (!respond.ok) {
    throw new Error(respond);
  }

  const result = await respond.json();

  const team = result.teams.map((teamdata) => ({
    name: teamdata.name,
    id: teamdata.id,
    city: teamdata.venue.city,
    venue: teamdata.venue.name,
    firstYear: teamdata.firstYearOfPlay,
    conference: teamdata.conference.name,
  }));

  return team;
}

exports.fetchTeamInfo = fetchTeamInfo;
exports.fetchTeamDetails = fetchTeamDetails;
