import React from "react";
import "./ListItemIcon.css";
import styled from "@emotion/styled";

const ListItemImg = styled.img`
  height: 2em;
  width: auto;
  margin-right: 1em;
`;

const ListItemIcon = (props) => {
  return <ListItemImg src={props.image} alt={props.alt} />;
};

export default ListItemIcon;
