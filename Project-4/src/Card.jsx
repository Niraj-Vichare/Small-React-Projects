import React from 'react'

function Card({name,horsepower,Origin,Year,mile,Displacement,weight,acceleration}) {
  return (
    <div className='card-div'>
        <h1>{name}</h1>
        <span>Year:   {Year}</span><br />
        <span>Weight: {weight}</span><br />
        <span>Acceleration:{acceleration}</span><br />
        <span>Origin:{Origin}</span><br />
        <span>Displacement:{Displacement}</span><br />
        <span>Horsepower:{horsepower}</span><br />
        <span>Mile:{mile}</span><br />
    </div>
  )
}

export default Card