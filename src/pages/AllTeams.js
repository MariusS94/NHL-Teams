import React, { useState, useEffect } from "react";
import { fetchData } from "../api/nhl-api";
import LoadingScreen from "../components/LoadingScreen";
import hockeypuck from "../assets/puck.svg";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemText from "../components/ListItemText";
import ListItemIcon from "../components/ListItemIcon";
import player from "../assets/eishockey.svg";

/* function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
 */
const AllTeams = () => {
  const [team, setTeam] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchTeams() {
      setIsLoading(true);
      const teamInfo = await fetchData();
      setTeam(teamInfo);
      setIsLoading(false);
    }
    fetchTeams();
  }, []);

  if (isLoading || team === null) {
    return <LoadingScreen src={hockeypuck} alt="loading icon puck" />;
  }
  const filteredTeam = team.filter((team) => {
    return team.name.toLowerCase().startsWith(query.toLowerCase());
  });

  return (
    <div className="app">
      <header>
        <div className="title">NHL-Teams</div>
        <input
          value={query}
          onChange={(event) =>
            ((value) => setQuery(value))(event.target.value.trim())
          }
          placeholder="Search team"
          className="searchInput"
        ></input>
      </header>
      <main>
        <List>
          {filteredTeam?.map((team) => (
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
