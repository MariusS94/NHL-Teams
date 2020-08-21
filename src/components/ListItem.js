import React from "react";
import "./ListItem.css";
import { Link } from "react-router-dom";

const ListItem = ({ link, children }) => {
  return (
    <Link className={"listItem"} to={link}>
      {children}
    </Link>
  );
};

export default ListItem;
