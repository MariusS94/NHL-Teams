import React, { useState, useEffect } from "react";

import "./App.css";
import List from "./components/List";
import { ListItemText } from "./components/ListItemText";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import player from "./assets/eishockey.svg";
import { fetchData } from "./api/nhl-api";

function App() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    async function fetchTeams() {
      const teamInfo = await fetchData();
      setTeam(teamInfo);
    }
    fetchTeams();
  }, []);

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
                firstDay={`First yeargit  of play: ${team.firstYear}`}
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
