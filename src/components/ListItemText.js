import React from "react";
import styled from "@emotion/styled";

const ContainerListItemText = styled.div`
  flex-grow: 1;
`;

const ListItemName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  padding-left: 0.3rem;
  padding-top: 0.3rem;
`;

const ListItemP = styled.p`
  padding: 0rem 2rem;
  margin: 0;
`;
const ListItemLastP = styled.p`
  padding: 0rem 2rem;
  margin: 0;
  padding-bottom: 1rem;
`;

export const ListItemText = (props) => {
  return (
    <ContainerListItemText>
      <ListItemName>{props.name}</ListItemName>
      <ListItemP>{props.id}</ListItemP>
      <ListItemP>{props.city}</ListItemP>
      <ListItemP>{props.venue}</ListItemP>
      <ListItemP>{props.conference}</ListItemP>
      <ListItemLastP>{props.firstDay}</ListItemLastP>
    </ContainerListItemText>
  );
};

export default ListItemText;
