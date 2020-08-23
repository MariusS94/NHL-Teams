import React, { useState, useEffect } from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemText from "../components/ListItemText";
import { fetchTeamData } from "../api/nhl-api";
import LoadingScreen from "../components/LoadingScreen";
import hockeypuck from "../assets/puck.svg";
import { useParams, useHistory } from "react-router-dom";
import arrow from "../assets/arrowLeft.svg";
import styled from "@emotion/styled";
import Footer from "../components/Footer";

const ContainerDetails = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const HeaderDetails = styled.header`
  text-align: center;
  padding: 1.5em;
  font-size: 1.4rem;
  font-weight: bold;
  background: var(--bg-bluegradient-);
`;

const ButtonBack = styled.button`
  background: transparent;
  border: none;
  position: fixed;
  left: 1em;
`;

const ArrowBackImg = styled.img`
  height: 2.5em;
`;

const MainDetails = styled.main`
  background: var(--bg-greygradient-);
  border: solid;
  border-width: 5px 0px;
  overflow: auto;
`;

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
    <ContainerDetails>
      <HeaderDetails>
        <ButtonBack onClick={() => history.goBack()}>
          <ArrowBackImg src={arrow} alt="Arrow left"></ArrowBackImg>
        </ButtonBack>
        <div>NHL-Teams</div>
      </HeaderDetails>
      <MainDetails>
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
      </MainDetails>
      <Footer>Placeholder</Footer>
    </ContainerDetails>
  );
};

export default Details;
