import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./App.css";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <h1 className="cardH1">{props.title}</h1>
        <div className="pContent">
          <p className="cardP">{props.desc}</p>
        </div>

        <DeleteIcon onClick={props.Cdel} className="cardButton">
          Delete
        </DeleteIcon>
      </div>
    </>
  );
};
export default Card;
