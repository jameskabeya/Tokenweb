import { useState } from 'react'
import Sidebar from './Sidebare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidebar/>
    </div>
  )
}

export default App
