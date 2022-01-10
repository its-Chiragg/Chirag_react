
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";


function App(){

    let [notes, setNotes] = useState([]);

    function addNote(newNote){
        // console.log(newNote);
        setNotes(prevVal=>{
            return [...prevVal,newNote];
        })

    }

    function deleteNote(id){
        setNotes(prevNotes=>{

          return  prevNotes.filter((notes,idx)=>{
                return id!==idx;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea addNote = {addNote} deleteNote = {deleteNote} />
            
            {notes.map((props,idx)=>{

            return(
                
            <Note 
                key = {idx} 
                id = {idx} 
                title = {props.title}
                content = {props.content}
                time = {props.time}
                addNote = {addNote}
                deleteNote = {deleteNote}
            />  
             ) })}
        </div>
    );
}

export default App;