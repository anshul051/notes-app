import { Trash2, Pencil } from "lucide-react";

const Preview = ({ note, deleteNote, setEditingNote, setShowAddNotes }) => {
  if (!note) {
    return (
      <div className="h-screen flex-1 bg-white p-6 flex items-center justify-center custom-scroll">
        <h3 className="text-gray-500 text-xl">Open Notes to Preview</h3>
      </div>
    );
  }

  return (

    
    <div className="h-screen flex-1 bg-white p-6 sm:p-8 lg:p-10 overflow-y-auto custom-scroll">

      {/* ================= TITLE ================= */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        {note.title}
      </h1>

      {/* FULL WIDTH UNDERLINE */}
      <hr className="border-gray-300 mb-4" />

      {/* ================= TAG CHIPS + ACTION BUTTONS ================= */}
      <div className="flex items-center justify-between mb-6">

        {/* TAG CHIPS */}
        <div className="flex items-center gap-3 flex-wrap">

          {note.tag && (
            <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700">
              {note.tag}
            </span>
          )}

          {note.priority && (
            <span className="px-3 py-1 text-sm rounded-full bg-yellow-200 text-yellow-800">
              {note.priority}
            </span>
          )}

          {note.status && (
            <span className="px-3 py-1 text-sm rounded-full bg-blue-200 text-blue-800">
              {note.status}
            </span>
          )}

        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4">
          <Pencil
            size={24}
            className="text-blue-500 cursor-pointer hover:text-blue-600"
            onClick={() => {
              setEditingNote(note);
              setShowAddNotes(true);
            }}
          />
          <Trash2
            size={24}
            className="text-red-500 cursor-pointer hover:text-red-600"
            onClick={() => deleteNote(note.id)}
          />
        </div>

      </div>

      {/* ================= DESCRIPTION ================= */}
      <p className="text-gray-700 text-lg leading-7 whitespace-pre-wrap pb-10">
        {note.description}
      </p>
    </div>
  );
};

export default Preview;
