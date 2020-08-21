import React, { useState, useEffect } from "react";
import { fetchData } from "../api/nhl-api";
import LoadingScreen from "../components/LoadingScreen";
import hockeypuck from "../assets/puck.svg";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemText from "../components/ListItemText";
import ListItemIcon from "../components/ListItemIcon";
import player from "../assets/eishockey.svg";

function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const AllTeams = () => {
  const [team, setTeam] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchTeams() {
      await waitFor(1000);
      const teamInfo = await fetchData();
      setIsLoaded(true);
      setTeam(teamInfo);
    }
    fetchTeams();
  }, []);
  if (!isLoaded) {
    return <LoadingScreen src={hockeypuck} alt="loading icon puck" />;
  }

  return (
    <div className="app">
      <header>NHL-Teams</header>
      <main>
        <List>
          {team?.map((team) => (
            <ListItem key={team.id} link={`/teams/${team.id}`}>
              <ListItemText name={team.name} />
              <ListItemIcon image={player} alt={"hockeyplayer icon"} />
            </ListItem>
          ))}
        </List>
      </main>
      <footer>Placeholder</footer>
    </div>
  );
};

export default AllTeams;
