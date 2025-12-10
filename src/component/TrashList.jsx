import React from "react";
import { RotateCcw, Trash2 } from "lucide-react";

const TrashList = ({ notes, restoreNote, deletePermanent, setSelectedNote }) => {
  return (
    <div className="h-screen w-full bg-gray-50 border-r border-gray-200 flex flex-col">
      
      {/* HEADER */}
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold text-gray-700">Trash</h2>
        <p className="text-sm text-gray-500">Deleted notes appear here</p>
      </div>

      {/* EMPTY STATE */}
      {notes.length === 0 && (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          No notes in Trash
        </div>
      )}

      {/* LIST */}
      <div className="flex-1 overflow-y-auto custom-scroll">
        {notes.map((note) => (
          <div
            key={note.id}
            onClick={() => setSelectedNote && setSelectedNote(note)}
            className="group bg-white border-b border-gray-200 p-4 cursor-pointer hover:bg-gray-100 transition-all flex flex-col gap-2"
          >
            {/* TITLE */}
            <h4 className="text-lg font-semibold text-gray-800 line-clamp-1">
              {note.title}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm line-clamp-2">
              {note.description}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-2">

              {/* RESTORE */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  restoreNote(note.id);
                }}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
              >
                <RotateCcw size={16} />
                Restore
              </button>

              {/* DELETE FOREVER */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deletePermanent(note.id);
                }}
                className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm"
              >
                <Trash2 size={16} />
                Delete forever
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrashList;