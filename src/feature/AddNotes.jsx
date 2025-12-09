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

  const [tag, setTag] = useState(editingNote ? editingNote.tag : "");
  const [priority, setPriority] = useState(
    editingNote ? editingNote.priority : "normal"
  );
  const [status, setStatus] = useState(
    editingNote ? editingNote.status : "active"
  );

  // Sync editingNote → form fields
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
      setTag(editingNote.tag || "");
      setPriority(editingNote.priority || "normal");
      setStatus(editingNote.status || "active");
    } else {
      setTitle("");
      setDescription("");
      setTag("");
      setPriority("normal");
      setStatus("active");
    }
  }, [editingNote]);

  // CREATE or UPDATE
  const handleSave = () => {
    if (!title.trim()) return;

    // UPDATE MODE
    if (editingNote) {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === editingNote.id
            ? { ...n, title, description, tag, priority, status }
            : n
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
      tag,
      priority,
      status,
      createdAt: Date.now(),
      pinned: false,
      deleted: false,
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

      <div className="flex items-center gap-4 text-sm text-gray-700 mb-3">
        {/* TAG SELECT */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Tag:</span>
          <select
            className="border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none cursor-pointer"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option value="">None</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="ideas">Ideas</option>
          </select>
        </div>

        {/* PRIORITY SELECT */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Priority:</span>
          <select
            className="border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none cursor-pointer"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Status:</span>
          <select
            className="border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none cursor-pointer"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="todo">To-Do</option>
            <option value="done">Done</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      {/* SAVE / UPDATE BUTTON */}
      <div
        onClick={handleSave}
        className="fixed bottom-6 right-6 bg-gray-900 rounded-full p-3 hover:bg-gray-800 cursor-pointer shadow-lg"
      >
        <ChevronRight
          size={40}
          className="stroke-white"
          onClick={() => setSelectedNote(null)}
        />
        <span className="sr-only">
          {editingNote ? "Update Note" : "Save Note"}
        </span>
      </div>
    </div>
  );
};

export default AddNotes;
