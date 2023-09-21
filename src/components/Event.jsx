import React from "react";
import RedirectButton from "./RedirectButton";
const Event = (props) => {
  return (
    <div className={ "recipeCard " }>
      <img src={props.imgLink}></img>
      <h5>{props.name}</h5>
      <h6>{props.origin}</h6>
      <RedirectButton url={props.website}/>
    </div>)
}

export default Event;
