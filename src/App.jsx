import { useState } from 'react'
import MyNotes from './Components/MyNotes';
import FetchData from './Components/FetchData';

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
    <MyNotes/>
    <FetchData/>
    </>
  )
}

export default App
