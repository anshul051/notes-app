import { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

const AddNotes = ({
  setShowAddNotes,
  setNotes,
  editingNote,
  setEditingNote,
  setSelectedNote,
}) => {
  const [title, setTitle] = useState(editingNote ? editingNote.title : "");
  const [description, setDescription] = useState(
    editingNote ? editingNote.description : ""
  );

  // Sync editingNote → form fields
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingNote]);

  // CREATE or UPDATE
  const handleSave = () => {
    if (!title.trim()) return;

    // UPDATE MODE
    if (editingNote) {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === editingNote.id ? { ...n, title, description } : n
        )
      );
      setEditingNote(null);
      setShowAddNotes(false);
      return;
    }

    // CREATE MODE
    const newNote = {
      id: Date.now(),
      title,
      description,
      createdAt: Date.now(),
      pinned: false,
    };

    setNotes((prev) => [newNote, ...prev]);
    setShowAddNotes(false);
  };

  return (
    <div className="h-full flex-1 bg-white p-6 flex flex-col">
      <X
        stroke="black"
        className="flex ml-auto cursor-pointer"
        size={30}
        onClick={() => {
          setEditingNote(null);
          setShowAddNotes(false);
        }}
      />

      <input
        type="text"
        className="text-5xl border-b-2 p-4 border-gray-200 outline-none text-gray-600"
        placeholder="Notes Heading"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description for your notes"
        className="text-xl p-4 outline-none text-gray-600 resize-none flex-1 custom-scroll"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* SAVE / UPDATE BUTTON */}
      <div
        onClick={handleSave}
        className="fixed bottom-6 right-6 bg-gray-900 rounded-full p-3 hover:bg-gray-800 cursor-pointer shadow-lg"
      >
        <ChevronRight size={40} className="stroke-white" onClick={() => setSelectedNote(null)} />
        <span className="sr-only">
          {editingNote ? "Update Note" : "Save Note"}
        </span>
      </div>
    </div>
  );
};

export default AddNotes;
