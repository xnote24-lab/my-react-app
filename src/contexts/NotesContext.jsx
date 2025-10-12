import React, {createContext,useState,useCallback} from "react";

export const NotesContext = createContext({
    note:[],
    addNote:[],
    deleteNote:[]
});

export function NotesProvider ({childeren}){
    const [notes,setNotes] = useState(["Learn React", "Try Context"]);

    const addNote = useCallback ((text) =>{
        if(!text || !text.trim()) return;
        setNotes ((prev) => [...prev,text.trim()]);
    },[]);

    const deleteNote = useCallback ((index) =>{
        setNotes((prev) => prev.filter((_, i) => i !== index));
    },[]);
    return(
        <NotesContext.Provider value={{notes,addNote,deleteNote}}>
            {childeren}
        </NotesContext.Provider>
    );
    //Why NotesContext?This demonstrates 
    // composition — multiple providers can be nested and components can use whichever context they need
}