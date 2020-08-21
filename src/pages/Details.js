import React, { useState, useEffect } from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemText from "../components/ListItemText";

import { fetchTeamData } from "../api/nhl-api";
import LoadingScreen from "../components/LoadingScreen";
import hockeypuck from "../assets/puck.svg";
import { useParams, useHistory } from "react-router-dom";
import arrow from "../assets/arrowLeft.svg";

const Details = () => {
  const { name } = useParams();
  const [team, setTeam] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function fetchTeams() {
      console.log(name);
      const teamInfo = await fetchTeamData(name);
      setIsLoaded(true);
      setTeam(teamInfo);
    }
    fetchTeams();
  }, [name]);

  if (!isLoaded) {
    return <LoadingScreen src={hockeypuck} alt="loading icon puck" />;
  }
  return (
    <div className="app">
      <header>
        <button onClick={() => history.goBack()}>
          <img src={arrow} alt="Arrow left"></img>
        </button>
        <div>NHL-Teams</div>
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
            </ListItem>
          ))}
        </List>
      </main>
      <footer>Placeholder</footer>
    </div>
  );
};

export default Details;
