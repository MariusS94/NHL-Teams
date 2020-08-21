import React, { useState, useEffect } from "react";
import { fetchData } from "../api/nhl-api";
import LoadingScreen from "./LoadingScreen";
import hockeypuck from "../assets/puck.svg";
import List from "./List";
import ListItem from "./ListItem";
import ListItemText from "./ListItemText";
import ListItemIcon from "./ListItemIcon";
import player from "../assets/eishockey.svg";

function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const AllTeams = () => {
  const [team, setTeam] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchTeams() {
      await waitFor(2000);
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
            <ListItem key={team.id} link={"#"}>
              <ListItemText
                name={team.name}
                id={`ID: ${team.id}`}
                city={`City: ${team.city}`}
                venue={`Venue: ${team.venue}`}
                conference={`Conference: ${team.conference}`}
                firstDay={`First year of play: ${team.firstYear}`}
              />
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
