import "./App.css";

export default function NoteCard({ key, index, note, onDelete, onOpen, cats }) {
    function formatDate(isoString) {
        const date = new Date(isoString);

        return date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    }


    return (
        <div className="noteCard" onClick={() => onOpen(note)} style={{ background: cats[note.category] || "white" }} >
            <button className="deleteBtn" onClick={(e) => { onDelete(index); e.stopPropagation(); }} >Delete</button>
            <div className="categoryTag">{note.category}</div>
            {note.title ? <div className="noteTitle">{note.title}</div> : null}
            {note.text} : {formatDate(note.createdAt)}
            {note.updatedAt ? (
                <div>Updated: {formatDate(note.updatedAt)}</div>
            ) : null}

        </div >
    )
}