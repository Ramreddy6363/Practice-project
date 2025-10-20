import NoteList from "./Components/NoteList";
import NotesForm from "./Components/NotesForm";
import { useState,useEffect } from 'react';
const App = () => {
  const [notes, setNotes] = useState(() => {   
    return JSON.parse(localStorage.getItem('notes')) || [];
  })
 useEffect(() => {
   localStorage.setItem('notes',JSON.stringify(notes))
 }, [notes])
 
  const deleteNote = (id) =>{
    const conformDelete = window.confirm("Are you sure you want to delete this Note?")
    if (conformDelete) {
      setNotes(notes.filter((note) => note.id !== id ))
    }
  } 
  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg text-center">
        <h2 className="text-2xl text-bold mb-4 text-center">📝Notes App</h2>
      <NotesForm notes={notes} setNotes={setNotes}/>
      <NoteList notes={notes} deleteNote = {deleteNote}/>
      </div>
    </>
  );
}

export default App