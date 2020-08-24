import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const ListItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #3d3b3b;
`;

const ListItem = ({ link, children }) => {
  return (
    <ListItemLink className={"listItem"} to={link}>
      {children}
    </ListItemLink>
  );
};

export default ListItem;
