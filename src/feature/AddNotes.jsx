import { ChevronRight } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

const AddNotes = ({setShowAddNotes, setNotes}) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if(!title.trim()) return;
    
    const newNote = {
      id: Date.now(), 
      title,
      description,
      createdAt: Date.now(),
      pinned: false,
    };

    //add Notes to parent state
    setNotes(prev => [newNote, ...prev]);

    //close AddNotes view
    setShowAddNotes(false);
  }

  return (
    <div className="h-full flex-1 bg-white p-6 flex flex-col overflow-y-auto custom-scroll">
      <X stroke="black" className="flex ml-auto cursor-pointer" size={30} onClick={() => setShowAddNotes(false)}/>
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

      <ChevronRight
        className="fixed bottom-6 right-6 bg-gray-900 rounded-full stroke-white p-2 hover:bg-gray-800 cursor-pointer"
        size={64}
        onClick={handleSave}
      />
    </div>
  );
};

export default AddNotes;
