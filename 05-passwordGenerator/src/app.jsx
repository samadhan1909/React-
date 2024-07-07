import { useState, useCallback, useEffect, useRef } from 'preact/hooks'



export function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, SetCharallowed] = useState(false)
  const [Password, setPassword]= useState("")

  // use Hook 
  const passwordRef = useRef(null)

  const passwordGenerator =useCallback (()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&*_+-=[]{}~`"

      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length+1)
        pass += str.charAt(char)
        
      }
      setPassword(pass)

  } , [length, numberAllowed, charAllowed, setPassword])       // Set password is also given because of the optimization and it is one of the dependency on which this function has to be re run 

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
        px-4 my-8 py-3 text-orange-500 bg-gray-800' >
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 
          py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"  
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
            />
            <label >Numbers </label> 
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={()=>{
              SetCharallowed((prev)=>!prev);
            }}
            />
            <label >Characters </label> 
          </div>
          
        </div>
        
      </div>
      
    </>
  )
}
