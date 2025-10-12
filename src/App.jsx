import { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import MyNotes from './Components/MyNotes';
import FetchData from './Components/FetchData';
import CallbackMemo from './Components/CallbackMemo';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <BrowserRouter>
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>React Router Demo</h1>

        {/* Navigation Menu */}
        <nav style={{ marginBottom: "20px" }}>
          <NavLink to="/" style={{ marginRight: "10px" }}>Home</NavLink>
          <NavLink to="/about" style={{ marginRight: "10px" }}>About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    <MyNotes/>
    <FetchData/>
    <CallbackMemo/>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
