import { useEffect, useState } from "react";
import "./App.css";
import SavedNotes from "./SavedNotes";
import { Modal, Button } from "@mantine/core";



export default function App() {

    const [noteText, setNoteText] = useState("")
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("quicknotes-notes");
        return saved ? JSON.parse(saved) : [];
    });

    const [noteTitle, setNoteTitle] = useState("");

    const [opened, setOpened] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    const [editTitle, setEditTitle] = useState("");
    const [editText, setEditText] = useState("");

    const [noteCategory, setNoteCategory] = useState("Personal");
    const [editCategory, setEditCategory] = useState("Personal");

    const [search, setSearch] = useState("");
    const [activeCat, setActiveCat] = useState("All");


    //Categories
    const CATS = {
        Personal: "#fff7ed",
        Work: "#eff6ff",
        School: "#f0fdf4",
    };
    //

    useEffect(() => {
        localStorage.setItem("quicknotes-notes", JSON.stringify(notes));
    }, [notes]);


    //Mantine
    function openNote(note) {
        setSelectedNote(note);
        setEditTitle(note.title || "");
        setEditText(note.text);
        setEditCategory(note.category || "Personal");

        setOpened(true);
    }

    function closeNote() {
        setOpened(false);
        setSelectedNote(null);
    }

    function handleUpdateNote() {
        const updatedNotes = notes.map((n) =>
            n === selectedNote
                ? {
                    ...n,
                    title: editTitle,
                    text: editText,
                    updatedAt: new Date().toISOString(),
                    category: editCategory,

                }
                : n
        );

        setNotes(updatedNotes);
        closeNote();
    }


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


    function handleAddNote(e) {
        e.preventDefault();
        const tobeSavedtText = noteText
        const toBeSavedNote = {
            title: noteTitle,
            text: tobeSavedtText,
            createdAt: new Date().toISOString(),
            category: noteCategory

        }
        const newNotes = [toBeSavedNote, ...notes]
        setNotes(newNotes)
        setNoteText("")
        setNoteTitle("");

    }

    const filteredNotes = notes.filter((n) => {
        const query = search.trim().toLowerCase();

        const matchesText = (
            query === "" ||
            (n.title || "").toLowerCase().includes(query) ||
            (n.text || "").toLowerCase().includes(query)
        );
        const matchesCat =
            activeCat === "All" || activeCat === (n.category || "Personal")


        return matchesText && matchesCat;

    });

    function handleDeleteNote(index) {
        const ok = confirm("Are you sure you want to delete your note?");
        if (!ok) return;
        const newNotes = notes.filter((n, idx) => idx != index)
        setNotes(newNotes)
    }


    return (
        <div className="page">
            <form className="form" onSubmit={handleAddNote}>
                <div className="toolbar">
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Search notes (title or text)..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="catFilters">
                        <button
                            type="button"
                            onClick={() => setActiveCat("All")}
                        >
                            All
                        </button>
                        {Object.keys(CATS).map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => setActiveCat(c)}
                            >
                                {c}
                            </button>
                        ))}

                    </div>
                </div>
                <input
                    type="text"
                    onChange={(e) => setNoteTitle(e.target.value)}
                    placeholder="Title (optional)"
                    value={noteTitle}
                />
                <select value={noteCategory} onChange={(e) => setNoteCategory(e.target.value)}>
                    {Object.keys(CATS).map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>

                <textarea onChange={(e) => setNoteText(e.target.value)}
                    rows={15}
                    cols={40}
                    placeholder="Your note..."
                    value={noteText}
                />
                <button type="submit" >Add</button>
            </form>
            <div className="savedNotes">
                <SavedNotes notes={filteredNotes} onDelete={handleDeleteNote} onOpen={openNote} cats={CATS} />
            </div>
            <Modal opened={opened} onClose={closeNote} title="Edit note" centered size="md">
                {selectedNote ? (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleUpdateNote();
                        }} >

                        <select value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
                            {Object.keys(CATS).map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>

                        <input
                            type="text"
                            placeholder="Title (optional)"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            style={{ width: "100%", marginBottom: 8 }}
                        />

                        <textarea
                            rows={6}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            style={{ width: "100%", marginBottom: 8 }}
                        />

                        <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>
                            Created: {formatDate(selectedNote.createdAt)}
                            {selectedNote.updatedAt ? (
                                <> | Updated: {formatDate(selectedNote.updatedAt)}</>
                            ) : null}
                        </div>

                        <Button type="submit">Save</Button>
                        <Button variant="light" ml="sm" onClick={closeNote}>
                            Cancel
                        </Button>
                    </form>
                ) : null}
            </Modal>

        </div >

    )
}

// const [isOpen, setIsOpen] = useState(false);

// <Modal opened={isOpen} onClose={() => setIsOpen(false)} />
