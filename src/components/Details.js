import React, { useState, useEffect } from "react";
import List from "./List";
import ListItem from "./ListItem";
import ListItemText from "./ListItemText";

import { fetchData } from "../api/nhl-api";
import LoadingScreen from "./LoadingScreen";
import hockeypuck from "../assets/puck.svg";
import { Link } from "react-router-dom";
const Details = () => {
  const [team, setTeam] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchTeams() {
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
            </ListItem>
          ))}
        </List>
      </main>
      <footer>
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
      </footer>
    </div>
  );
};

export default Details;
