import React from "react";
import { RotateCcw, Trash2 } from "lucide-react";

const TrashList = ({ notes, restoreNote, deletePermanent }) => {
  return (
    <div className="h-screen w-full bg-gray-50 p-6 overflow-y-auto custom-scroll">
      {/* HEADER */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Trash</h2>
      <p className="text-gray-500 mb-6">Deleted notes appear here</p>

      {/* EMPTY STATE */}
      {notes.length === 0 && (
        <div className="flex h-full items-center justify-center text-gray-500">
          No notes in Trash
        </div>
      )}

      {/* CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-xl shadow-md p-5 border border-gray-200 transition hover:shadow-lg"
          >
            {/* TITLE */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {note.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
              {note.description}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-auto">
              {/* RESTORE BUTTON */}
              <button
                onClick={() => restoreNote(note.id)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md text-blue-600 border border-blue-500 hover:bg-blue-50 transition"
              >
                <RotateCcw size={16} />
                Restore
              </button>

              {/* DELETE FOREVER BUTTON */}
              <button
                onClick={() => deletePermanent(note.id)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md text-red-600 border border-red-500 hover:bg-red-50 transition"
              >
                <Trash2 size={16} />
                Delete Forever
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrashList;