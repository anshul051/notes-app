import { Search, X } from "lucide-react";
import { useState } from "react";
import Note from "../feature/Note";

const List = ({
  notes,
  selectedNote,
  setSelectedNote,
  searchQuery,
  setSearchQuery,
  togglePin,
}) => {

  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div
      className="h-screen w-full sm:w-[350px] md:w-[420px] lg:w-[500px] bg-gray-100 border-r border-gray-300 overflow-y-auto custom-scroll"
    >
      <div className="flex items-center p-6 pt-16 sm:pt-10">
  {/* When search is CLOSED */}
  {!searchOpen && (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-3xl font-bold text-gray-900">Your Notes</h1>

      <button
        className="text-gray-700 hover:text-black cursor-pointer"
        onClick={() => setSearchOpen(true)}
      >
        <Search size={22} />
      </button>
    </div>
  )}

  {/* When search is OPEN */}
  {searchOpen && (
    <div className="flex items-center w-full gap-3">
      <input
        type="text"
        autoFocus
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search notes..."
        className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
      />

      <button
        className="text-gray-700 hover:text-black cursor-pointer"
        onClick={() => {
          setSearchOpen(false);
          setSearchQuery("");
        }}
      >
        <X size={22} />
      </button>
    </div>
  )}
</div>


      <div className="flex flex-col">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onClick={() => setSelectedNote(note)}
            togglePin={togglePin}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
