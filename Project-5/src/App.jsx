import { useState,useMemo } from 'react'
import  {cars}  from './Data'
import "./App.css"
import Card from './Card';
function App() {
  
  const [value,setValue]=useState("");

    return (
    <div className="App">
      <h1>CAR SEARCH</h1>
      <div className="btn">
        <input type="text" value={value} onChange={e=>setValue(e.target.value)} placeholder="Enter the car name 🔎"/>
      </div>
      <div className="cars">
        
        {cars.filter((car=>{
          if(value==""){
            return cars
          }else if(car.Name.includes(value.toLowerCase())){
            return cars
          }
        })).map((car,index)=>{
          return(
            <Card key={index} Name={car.Name} Miles_per_Gallon={car.Miles_per_Gallon} Weight_in_lbs={car.Weight_in_lbs} Displacement={car.Displacement} Cylinders={car.Cylinders} Horsepower={car.Horsepower} Acceleration={car.Acceleration} Year={car.Year} Origin={car.Origin}/>
            )
          })}
      </div>
    </div>
  )
}

export default App
