import { ChevronRight } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const AddNotes = ({
  setShowAddNotes,
  setNotes,
  editingNote,
  setEditingNote,
}) => {
  const [title, setTitle] = useState(editingNote ? editingNote.title : "");
  const [description, setDescription] = useState(
    editingNote ? editingNote.description : ""
  );

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingNote]);

  const handleSave = () => {
    if (!title.trim()) return;

    // --- UPDATE MODE ---
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

    // --- CREATE MODE ---
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
    <div className="h-full flex-1 bg-white p-6 flex flex-col overflow-y-auto custom-scroll">
      <X
        stroke="black"
        className="flex ml-auto cursor-pointer"
        size={30}
        onClick={() => setShowAddNotes(false)}
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-4xl sm:text-4xl lg:text-5xl border-b-2 p-4 border-gray-200 focus:outline-none text-gray-600"
        placeholder="Notes Heading"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description for your notes"
        className="text-xl p-4 focus:outline-none text-gray-600 resize-none flex-1 custom-scroll"
      />

      <div
        onClick={handleSave}
        className="fixed bottom-6 right-6 bg-gray-900 rounded-full p-3 hover:bg-gray-800 cursor-pointer shadow-lg"
      >
        <ChevronRight size={40} className="stroke-white" />
        <span className="sr-only">
          {editingNote ? "Update Note" : "Save Note"}
        </span>
      </div>
    </div>
  );
};

export default AddNotes;
