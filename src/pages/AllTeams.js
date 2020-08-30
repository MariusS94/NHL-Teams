import React, { useState } from "react";
import { fetchData } from "../api/server-fetch";
import LoadingScreen from "../components/LoadingScreen";
import hockeypuck from "../assets/puck.svg";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemText from "../components/ListItemText";
import ListItemIcon from "../components/ListItemIcon";
import player from "../assets/eishockey.svg";
import { useQuery } from "react-query";
import SearchInput from "../components/SearchInput";
import styled from "@emotion/styled";
import Footer from "../components/Footer";

const ContainerApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const HeaderAllTeams = styled.header`
  text-align: center;
  padding: 1.5em;
  font-size: 1.4rem;
  font-weight: bold;
  background: var(--bg-bluegradient-);
`;

const MainAllTeams = styled.main`
  background: var(--bg-greygradient-);
  border: solid;
  border-width: 5px 0px;
  overflow: auto;
`;

const AllTeams = () => {
  const [query, setQuery] = useState("");
  const { isLoading, isError, data, error } = useQuery("teams", fetchData);

  if (isLoading) {
    return <LoadingScreen src={hockeypuck} alt="loading icon puck" />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const filteredTeam = data.filter((team) => {
    return team.name.toLowerCase().startsWith(query.toLowerCase());
  });

  return (
    <ContainerApp>
      <HeaderAllTeams>
        <div className="title">NHL-Teams</div>
        <SearchInput
          value={query}
          onChange={(value) => setQuery(value)}
          placeholder="Search team"
        ></SearchInput>
      </HeaderAllTeams>
      <MainAllTeams>
        <List>
          {filteredTeam?.map((team) => (
            <ListItem key={team.id} link={`/teams/${team.id}`}>
              <ListItemText name={team.name} />
              <ListItemIcon image={player} alt={"hockeyplayer icon"} />
            </ListItem>
          ))}
        </List>
      </MainAllTeams>
      <Footer>Placeholder</Footer>
    </ContainerApp>
  );
};

export default AllTeams;
