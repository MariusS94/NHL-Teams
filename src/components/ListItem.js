import React from "react";
import "./ListItem.css";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <Link className={"listItem"} to={props.link}>
      {props.children}
    </Link>
  );
};

export default ListItem;
