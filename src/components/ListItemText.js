import React from "react";
import "./ListItemText.css";

export const ListItemText = (props) => {
  return (
    <div className={"listItemText"}>
      <p>{props.name}</p>
      <p>{props.id}</p>
      <p>{props.city}</p>
      <p>{props.venue}</p>
      <p>{props.conference}</p>
      <p>{props.firstDay}</p>
    </div>
  );
};

export default ListItemText;
