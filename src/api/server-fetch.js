export async function fetchData() {
  const respond = await fetch("http://localhost:3000/teams");
  console.log(respond);

  if (!respond.ok) {
    throw new Error(respond);
  }

  const result = await respond.json();

  const team = result.map((teamdata) => ({
    name: teamdata.name,
    id: teamdata.id,
  }));

  return team;
}

export async function fetchTeamData(teamId) {
  console.log(teamId);
  const respond = await fetch(`http://localhost:3000/teams/${teamId}`);
  if (!respond.ok) {
    throw new Error(respond);
  }

  const result = await respond.json();

  const team = result.map((teamdata) => ({
    name: teamdata.name,
    id: teamdata.id,
    city: teamdata.city,
    venue: teamdata.name,
    firstYear: teamdata.firstYear,
    conference: teamdata.conference,
  }));

  console.log(team);
  return team;
}
