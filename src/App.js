import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [view, setView] = useState("viewNotes");

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    setView("viewNotes");
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleCreateNote() {
    setView("createNote");
  }

  function handleViewNotes() {
    setView("viewNotes");
  }

  return (
    <div>
      <Header />
      <div className="button-container">
        <button onClick={handleCreateNote}>Create Note</button>
        <button onClick={handleViewNotes}>View Notes</button>
      </div>
      {view === "createNote" && <CreateArea onAdd={addNote} />}
      {view === "viewNotes" &&
        notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      <Footer />
    </div>
  );
}

export default App;
