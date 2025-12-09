import React from "react";
import { Pin, PinOff } from "lucide-react";

const Note = ({ note, onClick, togglePin }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full group bg-gray-100 border-b border-gray-200 
                 p-4 cursor-pointer hover:bg-white transition-all rounded-md shadow-sm"
    >
      {/* TITLE + TAG ROW */}
      <div className="flex items-start justify-between gap-3 mb-2">

        {/* TITLE */}
        <h4 className="text-lg font-semibold text-gray-900 line-clamp-1 flex-1">
          {note.title}
        </h4>

        {/* TAGS + PIN INLINE */}
        <div className="flex items-center gap-2 flex-wrap justify-end max-w-[60%]">

          {/* TAG CHIPS */}
          {note.tag && (
            <span className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
              {note.tag}
            </span>
          )}

          {note.priority && (
            <span className="px-2 py-0.5 bg-yellow-200 text-yellow-800 text-xs rounded-full">
              {note.priority}
            </span>
          )}

          {note.status && (
            <span className="px-2 py-0.5 bg-blue-200 text-blue-800 text-xs rounded-full">
              {note.status}
            </span>
          )}

          {/* INLINE PIN ICON */}
          <div
            className="text-gray-500 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); 
              togglePin(note.id);
            }}
          >
            {note.pinned ? (
              <Pin size={18} strokeWidth={1.75} />
            ) : (
              <PinOff size={18} strokeWidth={1.75} />
            )}
          </div>

        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm line-clamp-2">
        {note.description}
      </p>
    </div>
  );
};

export default Note;
