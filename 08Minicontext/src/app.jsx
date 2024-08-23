
import './app.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider/userContextProvider'

export function App() {
 
  return (
    <UserContextProvider>
     <h1>React Context API</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

