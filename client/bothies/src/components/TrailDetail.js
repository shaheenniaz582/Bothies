import React from 'react';

const TrailDetail = (props) => {
  if(!props.trail) return null;
  return (
    <div>
      <h1>{props.trail.name}</h1>
      <h2>Difficulty: {props.trail.difficulty}</h2>
      <h4>{props.trail.summary}</h4>
      <img src={props.trail.imgMedium} alt ="trail" height="200" />
    </div>
  )
}

export default TrailDetail;
