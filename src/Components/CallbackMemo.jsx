import { useState, useCallback, useMemo,useRef } from "react";

export default function CallbackMemo(){
    const [notes,setNotes] = useState(["Learn React", "Practice Hooks"]);
    const [text,setText] = useState("");// variable for text
    const [search,setSearch] = useState(""); // variable for search
    const inputRef = useRef();
    // step 2 create function for addnote section
    const addNote = useCallback(() =>{
        if(!text.trim()) return;
        setNotes((prev) => [...prev,text]);
        setText("");
        inputRef.current.focus();
    },[text]);
//step3 function for filternodes
const filteredNotes = useMemo(() =>
    notes.filter((n) => n.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
    [notes,search]
);
return(
    <>
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📝 Searchable Notes</h1>
      <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}
      placeholder="Type a note..."
      style={{padding:"8px",marginRight:"8px"}}/>
      <button onClick={addNote}>Add Note</button>
      <div style={{ marginTop: "20px" }}>
        <input value={search} onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Notes..."
        style={{padding:"8px"}}/>
      </div>
      <ul style={{marginTop:"20px"}}>
        {filteredNotes.map((note,i) =>(
            <li key={i}>{note}</li>
        ))}
      </ul>
      </div>
      </>
)
}