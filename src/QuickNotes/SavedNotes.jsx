import NoteCard from "./NoteCard";
import "./App.css";

export default function SavedNotes({ notes, onDelete, onOpen }) {
    return (
        <div className="grid">
            {notes.map((n, idx) => <NoteCard key={idx} index={idx} note={n} onDelete={onDelete} onOpen={onOpen} />)}
        </div>

    )
}