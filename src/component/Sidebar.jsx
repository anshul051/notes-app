import {
  House,
  Plus,
  RotateCcw,
  SlidersHorizontal,
  NotebookPen,
  Menu,
  X,
} from "lucide-react";

const Sidebar = ({
  setShowAddNotes,
  setShowResetConfirm,
  goHome,
  mobileSidebarOpen,
  setMobileSidebarOpen,
  selectedNote,
}) => {
  return (
    <>
      {/* MOBILE TOGGLE BUTTON */}
      {/* MOBILE HAMBURGER — hidden when preview is open */}
      {!selectedNote && !mobileSidebarOpen && (
        <button
          className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md shadow-md"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        >
          <Menu size={20} />
        </button>
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 h-screen bg-gray-950 text-white p-6 flex flex-col z-40
          transition-all duration-300
          ${mobileSidebarOpen ? "left-0" : "-left-[280px]"}
          lg:left-0
          w-[220px] sm:w-[260px] lg:w-[280px]
        `}
      >
        {/* CLOSE BUTTON FOR MOBILE */}
        <button
          className="lg:hidden absolute top-4 right-4 text-gray-300 hover:text-white"
          onClick={() => setMobileSidebarOpen(false)}
        >
          <X size={22} />
        </button>

        {/* LOGO */}
        <div className="flex items-center justify-center gap-3 mt-10 select-none">
          <NotebookPen />
          <h1 className="text-3xl font-bold opacity-80">NotesMan</h1>
        </div>

        {/* MENU */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col gap-10 text-xl font-semibold text-gray-400 cursor-pointer">
            <p
              className="hover:opacity-100 hover:scale-105 transition-all flex gap-2 hover:text-white"
              onClick={() => {
                goHome();
                setMobileSidebarOpen(false);
              }}
            >
              <House /> Home
            </p>

            <p
              className="hover:opacity-100 hover:scale-105 transition-all flex gap-2 hover:text-white"
              onClick={() => {
                setShowAddNotes(true);
                setMobileSidebarOpen(false);
              }}
            >
              <Plus /> Create
            </p>

            <p
              className="hover:opacity-100 hover:scale-105 transition-all flex gap-2 hover:text-white"
              onClick={() => {
                setShowResetConfirm(true);
                setMobileSidebarOpen(false);
              }}
            >
              <RotateCcw /> Reset
            </p>

            <p className="hover:opacity-100 hover:scale-105 transition-all flex gap-2 hover:text-white">
              <SlidersHorizontal /> Filter
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
