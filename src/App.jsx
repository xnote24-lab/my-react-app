import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // Step 1: Define state for notes and input text
  const [notes, setNotes] = useState([]);
  const [text,setText] = useState("");
// Step 2: Handle input change
function handleInputChange(e){
  setText(e.target.value);
}
// Step 3: Handle Add Note button
function handleAddnoteBtn(){
  if(text.trim() === "") return; // avoid empty notes
  setNotes([...notes,text]); // add note to list
  setText("");//clear input
}
// step 4: handle delete button
function handleDelete(index){
  setNotes(notes.filter((_,i) => i !== index));
}
  return (
    <>
      <div style={{padding:"2rem",fontFamily:"sans-serif"}}>
     <h1>📝 My Notes</h1>  
     <input type='text' placeholder='Type a Note..' value={text} onChange={handleInputChange} style={{padding:"8px",marginRight:"8px",marginLeft:"8px",borderRadius:"6px",border:"1px solid #ccc",}}/>
     <button onClick={handleAddnoteBtn} style={{padding: "8px 12px",
          borderRadius: "6px",
          background: "#007bff",
          color: "white",
          border: "none",}}>Add Note</button>
        <ul style={{marginTop:"20px"}}>
          {notes.map((note,index) => (
            <li key={index}>{note} <button onClick={() => handleDelete(index)}>Delete</button></li>
          ))}
        </ul>
      </div>
      
      
    </>
  )
}

export default App
