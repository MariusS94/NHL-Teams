import React from "react";

import "./App.css";
import List from "./components/List";
import { ListItemText } from "./components/ListItemText";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import arrowRight from "./assets/eishockey.svg";

function App() {
  const team = {
    name: "New Jersey devis",
    id: "1",
    city: "Newark",
    conference: "Eastern",
    firstDay: "1982",
    venue: "Prudential Center",
  };

  return (
    <div className="app">
      <header>NHL-Teams</header>
      <main>
        <List>
          <ListItem>
            <ListItemText
              name={team.name}
              id={`ID: ${team.id}`}
              city={`City: ${team.city}`}
              venue={`Venue: ${team.venue}`}
              conference={`Conference: ${team.conference}`}
              firstDay={`First day of play: ${team.firstDay}`}
            />
            <ListItemIcon image={arrowRight} alt={"arrow rigtht"} />
          </ListItem>
        </List>
      </main>
      <footer>Placeholder</footer>
    </div>
  );
}

export default App;
