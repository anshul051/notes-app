import { useEffect, useRef, useState } from "react";
import Sidebar from "../component/Sidebar";
import List from "../component/List";
import Preview from "../component/Preview";
import AddNotes from "../feature/AddNotes";
import { Plus } from "lucide-react";

const STORAGE_KEY = "notesApp.notes";

const NotesLayout = () => {
  const [showAddNotes, setShowAddNotes] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editingNote, setEditingNote] = useState(null); // ← NEW
  const [searchQuery, setSearchQuery] = useState("");
  const firstRenderRef = useRef(true);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [viewTrash, setViewTrash] = useState(false);

  const restoreNote = (id) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, deleted: false } : n))
    );
  };

  const deletePermanent = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  // Detect desktop/mobile
  const isMobile = window.innerWidth < 1024; // Matches Tailwind lg breakpoint

  // HOME ACTION
  const goHome = () => {
    setShowAddNotes(false);
    setSelectedNote(null);
    setEditingNote(null);
  };

  // DELETE ALL NOTES
  const resetAllNotes = () => {
    setNotes([]);
    setSelectedNote(null);
    setShowResetConfirm(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  // LOAD NOTES
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setNotes(parsed);
    } catch (error) {
      console.error("Failed to load notes:", error);
    }
  }, []);

  // SAVE NOTES
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (error) {
      console.error("Failed to save notes:", error);
    }
  }, [notes]);

  const deleteNote = (id) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, deleted: true } : n))
    );
    setSelectedNote(null);
    setEditingNote(null);
  };

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n))
    );
  };

  // 1. REMOVE DELETED NOTES
  const activeNotes = notes.filter((n) => !n.deleted);

  // 2. SORT PINNED FIRST
  const sortedNotes = [...activeNotes].sort((a, b) =>
    a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1
  );

  // 3. APPLY SEARCH FILTER
  const filteredNotes = sortedNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full">
      {/* SIDEBAR */}
      <Sidebar
        goHome={goHome}
        setShowAddNotes={setShowAddNotes}
        setShowResetConfirm={setShowResetConfirm}
        mobileSidebarOpen={mobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
        selectedNote={selectedNote}
        viewTrash={viewTrash}
        setViewTrash={setViewTrash}
      />

      {/* RESET POPUP */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[350px] space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Delete All Notes?
            </h2>
            <p className="text-gray-600 text-sm leading-5">
              Are you sure? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded-md"
                onClick={() => setShowResetConfirm(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={resetAllNotes}
              >
                Delete All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="w-full ml-0 lg:ml-[280px] flex flex-col lg:flex-row">
        {/* LIST */}
        {viewTrash ? (
          <TrashList
            notes={notes.filter((n) => n.deleted)}
            restoreNote={restoreNote}
            deletePermanent={deletePermanent}
            setSelectedNote={setSelectedNote}
          />
        ) : (
          <List
            notes={filteredNotes}
            setSelectedNote={setSelectedNote}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            togglePin={togglePin}
          />
        )}

        {/* DESKTOP PREVIEW / ADD */}
        <div className="hidden lg:block flex-1">
          {showAddNotes ? (
            <AddNotes
              setShowAddNotes={setShowAddNotes}
              setNotes={setNotes}
              editingNote={editingNote}
              setEditingNote={setEditingNote}
              setSelectedNote={setSelectedNote}
            />
          ) : (
            <Preview
              note={selectedNote}
              deleteNote={deleteNote}
              setEditingNote={setEditingNote}
              setShowAddNotes={setShowAddNotes}
              isMobile={false}
            />
          )}
        </div>

        {/* MOBILE ADD NOTES POPUP */}
        {showAddNotes && (
          <div className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white w-[90%] h-[85%] rounded-xl shadow-xl p-4 overflow-y-auto">
              <AddNotes
                setShowAddNotes={setShowAddNotes}
                setNotes={setNotes}
                editingNote={editingNote}
                setEditingNote={setEditingNote}
                setSelectedNote={setSelectedNote}
              />
            </div>
          </div>
        )}
      </div>

      {/* MOBILE FULLSCREEN PREVIEW */}
      {selectedNote && !showAddNotes && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col">
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            {/* BACK */}
            <button
              className="bg-gray-900 text-white p-2 rounded-md shadow-md"
              onClick={() => setSelectedNote(null)}
            >
              Back
            </button>

            {/* EDIT */}
            <button
              className="text-blue-500 font-medium ml-auto mr-4"
              onClick={() => {
                setEditingNote(selectedNote);
                setSelectedNote(null); // ← ONLY MOBILE SHOULD DO THIS
                setShowAddNotes(true);
              }}
            >
              Edit
            </button>

            {/* DELETE */}
            <button
              className="text-red-500 font-medium"
              onClick={() => deleteNote(selectedNote.id)}
            >
              Delete
            </button>
          </div>

          {/* CONTENT */}
          <div className="flex-1 overflow-y-auto p-5">
            <h1 className="text-3xl font-bold text-gray-900 border-b-2 pb-3 mb-4 border-gray-200">
              {selectedNote.title}
            </h1>

            <p className="text-gray-700 text-base leading-7 whitespace-pre-wrap pb-10">
              {selectedNote.description}
            </p>
          </div>
        </div>
      )}

      {/* MOBILE FLOATING + BUTTON */}
      <button
        className="lg:hidden fixed bottom-6 right-6 bg-gray-900 text-white p-4 rounded-full shadow-lg"
        onClick={() => {
          setEditingNote(null);
          setShowAddNotes(true);
        }}
      >
        <Plus size={26} />
      </button>
    </div>
  );
};

export default NotesLayout;
