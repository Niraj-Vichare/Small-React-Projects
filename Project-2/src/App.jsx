import './App.css' 
import data from './Data'
import IndiviualDiv from './IndiviualDiv'
function App() {

  return (
    <div className='main'>

      <h1>Frequently Asked Questions</h1>
      {data.map((ele)=>{
        return(
          <IndiviualDiv key={ele.id} ques={ele.question} ans={ele.answer}/>
        )
      })}


    </div>
  )
}

export default App
