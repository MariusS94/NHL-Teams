import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <a className={"listItem"} href="link">
      {props.children}
    </a>
  );
};

export default ListItem;
