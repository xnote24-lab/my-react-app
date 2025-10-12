import { useState } from 'react'
import MyNotes from './Components/MyNotes';
import FetchData from './Components/FetchData';
import CallbackMemo from './Components/CallbackMemo';

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
    <MyNotes/>
    <FetchData/>
    <CallbackMemo/>
    </>
  )
}

export default App
