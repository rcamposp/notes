import { useState } from "react";
import type { Route } from "./+types/home";
import { notesData } from "./data";
import Note from "./note";
import NoteForm from "~/note-form/note-form";


export function meta({ }: Route.MetaArgs) {


    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
    
}



export function NotesGrid() {

    const [open, setOpen] = useState(false)
    const [notes, setNotes] = useState(notesData)

    const handleCloseClick = () => {
        setOpen(false);
    }

    const handleAddNote = (note: Note) =>{
        setNotes([...notes, note])
    }
    return (
        <>
            <div className="sd">
                <button onClick={() => setOpen(true)}>Add Note</button>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    notes.map((note, index) => {
                        return (<Note key={index} note={note} />)
                    })
                }
            </div>

            <div>
                <NoteForm isOpen={open} handleClose={handleCloseClick} handleAddNote={handleAddNote}></NoteForm>                                
            </div>
        </>
    )
}