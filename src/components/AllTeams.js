import React, { useState, useEffect } from "react";
import { fetchData } from "../api/nhl-api";
import LoadingScreen from "./LoadingScreen";
import hockeypuck from "../assets/puck.svg";
import List from "./List";
import ListItem from "./ListItem";
import ListItemText from "./ListItemText";
import ListItemIcon from "./ListItemIcon";
import player from "../assets/eishockey.svg";
import { Link } from "react-router-dom";

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
            <ListItem key={team.id} link="/details">
              <ListItemText name={team.name} />
              <ListItemIcon image={player} alt={"hockeyplayer icon"} />
            </ListItem>
          ))}
        </List>
      </main>
      <footer>
        <Link to="/">All Teams</Link>
        <Link to="/details">Details</Link>
      </footer>
    </div>
  );
};

export default AllTeams;
