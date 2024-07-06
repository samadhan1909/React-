import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 15

  const addValue=()=>{
    
      setCounter(prevCounter => prevCounter +1)
      setCounter(prevCounter => prevCounter +1)
      setCounter(prevCounter => prevCounter +1)
      setCounter(prevCounter => prevCounter +1)
    

    // counter = counter +1
    

    
  }

  const removeValue = ()=> {
    if (counter > 0 ){
      setCounter(counter-1)
    }
    
    
  }


  return (
    <>
      <h1>Chai aur react </h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value </button><br/>
      <button onClick={removeValue} >Remove value </button>
      <p> counter :{counter}</p>
    </>
  )
}

export default App
