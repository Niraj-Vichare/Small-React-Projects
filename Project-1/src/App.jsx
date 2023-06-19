import { useEffect, useState } from 'react'
import './App.css'

import { BsFillTrash3Fill } from 'react-icons/bs' 
import { BsTrash2Fill } from 'react-icons/bs';

function App() {
  const [items,setItems]=useState([]);
  const [written,setWritten]=useState('');
  const HandleSumbit=()=>{
    alert("Items is added to list")
    setItems(items=>[...items,written]); 
    setWritten('');
  }

  const DeleteItem=(index)=>{
    alert("Item gets deleted")
    items.splice(index,1)
    return items
  }

  return (
      <div className='main-div'>
        <h1>TODO LIST</h1>
        <div className="box">
          <div className="input-box">
            <input type="text" placeholder='Enter the items' onChange={e=>setWritten(e.target.value)} value={written}/>
            <button onClick={HandleSumbit}>SUMBIT</button>
          </div>
          <div className="display-box">
            {items.length==0?<span>No items are added</span>:
              items.map((item,index)=>{
                return(
                    <li key={index}>{item} <BsFillTrash3Fill size={20} className='icons' onClick={()=>DeleteItem(index)}/></li>
                )
            })
            }
          </div>
        </div>
        
      </div>
  )
}

export default App
