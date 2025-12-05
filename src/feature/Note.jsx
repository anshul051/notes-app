import React from "react";
import { Pin, PinOff } from "lucide-react";

const Note = ({ note, onClick, togglePin }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full group bg-gray-100 border-b border-gray-200 p-4 cursor-pointer 
                 hover:bg-white transition-all rounded-md shadow-sm"
    >
      {/* PIN ICON (same size as trash icon visually) */}
      <div
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // prevents opening preview
          togglePin(note.id);
        }}
      >
        {note.pinned ? (
          <Pin size={20} strokeWidth={1.75} />
        ) : (
          <PinOff size={20} strokeWidth={1.75} />
        )}
      </div>

      <h4 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
        {note.title}
      </h4>

      <p className="text-gray-600 text-sm line-clamp-2">
        {note.description}
      </p>
    </div>
  );
};

export default Note;
