import React from 'react';

const TrailDetail = (props) => {

  if(!props.trail) return null;
  return (
    <div className="trail_details">
      <h1>{props.trail.name}</h1>
      <h3>{props.trail.location}</h3>
      <h4>Difficulty: {props.trail.difficulty}</h4>
      <h5>{props.trail.summary}</h5>
      <p id="trailId">{props.trail.id}</p>

    </div>
  )
}

export default TrailDetail;
