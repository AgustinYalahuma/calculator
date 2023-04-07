import React from "react";
import "../styles/ButtonClear.css";

export default function ButtonClear(props) {
  return (
    <div className="clear" onClick={props.clickHandler}>
      {props.children}
    </div>
  );
}
