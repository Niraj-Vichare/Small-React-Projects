import './App.css'
import cars from './Data'
import Card from './Card'
import { useEffect, useState } from 'react'



function App() {
  const [cardperpage,setCardperPage]=useState(12)
  const [currentPage,setcurrentPage]=useState(1)
  let totalpage=Math.floor(cars.length/cardperpage);
    const array=[];
    for (let index = 1; index <= totalpage; index++) {
      array.push(index)
    } 
    const finalpointer=(currentPage)*cardperpage;
    const initialpointer=finalpointer-cardperpage;
    const cardonpage=cars.slice(initialpointer,finalpointer);

  const HandlePage=(index)=>{
    setcurrentPage(index)
  }
  return (
    <>
    <h1 id="heading">PAGING SYSTEM ON CARS CARD</h1>
    <div className='main'>
      {cardonpage.map((car, ele) => {
        return (
          <Card key={ele} Origin={car.Origin} Year={car.Year} name={car.Name} mile={car.Miles_per_Gallon} horsepower={car.Horsepower} Displacement={car.Displacement} weight={car.Weight_in_lbs} acceleration={car.Acceleration} />
        )
      })}
    </div>
    <div className='paging'>
        {array.map((ele,index)=>{
            return(
                <div className="box" onClick={()=>HandlePage(index+1)}>
                    <span>{ele}</span>
                </div>
            )
        })}

    </div>
    
    </>
  )
}

export default App
