import React, { useState, useEffect } from "react";

import "./App.css";
import List from "./components/List";
import { ListItemText } from "./components/ListItemText";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import player from "./assets/eishockey.svg";
import { fetchData } from "./api/nhl-api";
import LoadingScreen from "./components/LoadingScreen";
import hockeypuck from "./assets/puck.svg";

function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function App() {
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
            <ListItem key={team.id} link={Roster}>
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
}

export default App;
