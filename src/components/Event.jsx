import React from "react";

const Event = (props) => {
  return (
    <div className={ "recipeCard " }>
      <img src={props.imgLink}></img>
      <h5>{props.name}</h5>
      <h6>{props.origin}</h6>
      <button onClick={props.website}>Recipe Button</button>
    </div>)
}

export default Event;
