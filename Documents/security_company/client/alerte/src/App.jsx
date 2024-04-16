import { useState } from 'react'
import './App.css'
import Login from './Login'
import Sign_up from './Sign_up'
import Sidebar from '../Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Login/> */}
      {/* <Sign_up/> */}
      <Sidebar/>
    </div>
  )
}

export default App
