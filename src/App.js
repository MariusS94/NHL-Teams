import React, { useState } from "react";

import "./App.css";
import List from "./components/List";
import { ListItemText } from "./components/ListItemText";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import arrowRight from "./assets/eishockey.svg";
import { fetchData } from "./api/nhl-api";

function App() {
  const [team, setTeam] = useState(null);
  /* const team = {
    name: "New Jersey devis",
    id: "1",
    city: "Newark",
    conference: "Eastern",
    firstDay: "1982",
    venue: "Prudential Center",
  }; */
  async function handleClick() {
    const data = await fetchData();

    console.log(data);
    setTeam(data);
  }

  return (
    <div className="app">
      <header>
        <button onClick={handleClick}>fetch</button>
        NHL-Teams
      </header>
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
              <ListItemIcon image={arrowRight} alt={"arrow rigtht"} />
            </ListItem>
          ))}
        </List>
      </main>
      <footer>Placeholder</footer>
    </div>
  );
}

export default App;
