import React from "react";
import "./ListItemIcon.css";

const ListItemIcon = (props) => {
  return <img className={"listItemIcon"} src={props.image} alt={props.alt} />;
};

export default ListItemIcon;
