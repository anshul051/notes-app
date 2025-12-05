import { Trash2 } from "lucide-react";
import { Pencil } from 'lucide-react';

const Preview = ({ note, deleteNote }) => {
  if (!note) {
    return (
      <div className="h-screen flex-1 bg-white p-6 flex items-center justify-center custom-scroll">
        <h3 className="text-gray-500 text-xl">Open Notes to Preview</h3>
      </div>
    );
  }

  return (
    <div className="h-screen flex-1 bg-white p-6 sm:p-8 lg:p-10 overflow-y-auto custom-scroll">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900 border-b-2 p-4 border-gray-200 focus:outline-none w-full">
          {note.title}
        </h1>

        <Pencil size={28} className="text-blue-500 cursor-pointer hover:text-blue-600 mr-6 " />

        <Trash2
          size={28}
          className="text-red-500 cursor-pointer hover:text-red-600"
          onClick={() => deleteNote(note.id)}
        />
        
      </div>

      <p className="text-gray-700 text-lg leading-7 whitespace-pre-wrap pb-10">
        {note.description}
      </p>
    </div>
  );
};

export default Preview;