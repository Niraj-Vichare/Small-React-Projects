import React from 'react'

function Card(props) {
  return (
    <div className='box' key={props.index}>
    <div className="content">
      <span className="name">{props.Name}</span>
    </div>
    <div className="content">
      <span className="attr">Miles_per_Gallon</span>:<span className="value">{props.Miles_per_Gallon}</span>
    </div>    
    <div className="content">
      <span className="attr">Weight_in_lbs</span>:<span className="value">{props.Weight_in_lbs}</span>
    </div>
    <div className="content">
        <span className="attr">Dispanlacement</span>:<span className='dispanlacement'>{props.Displacement}</span>            
    </div>
    <div className="content">
      <span className="attr">Cylinders</span>:<span className='value'>{props.Cylinders}</span>            
    </div>
    <div className="content">            
      <span className="attr">Horsepower</span>:<span className="value">{props.Horsepower}</span>
    </div>
    <div className="content">
      <span className="attr">Acceleration</span>:<span className="value">{props.Acceleration}</span>
    </div>
    <div className="content">
      <span className="attr">Year</span>:<span className="value">{props.Year}</span>
    </div>
    <div className="content">
      <span className="attr">Origin</span>:<span className="value">{props.Origin}</span>
    </div>
  </div>

  )
}

export default Card