import React from "react";

const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-lg border text-sm transition ${
      active
        ? "bg-gray-900 text-white border-gray-900"
        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
    }`}
  >
    {label}
  </button>
);

const FiltersPopup = ({ filters, updateFilter, clearFilters, close }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md space-y-5">

        <h2 className="text-xl font-semibold text-gray-800">Filter Notes</h2>

        {/* TAG FILTERS */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Tags</p>
          <div className="flex flex-wrap gap-2">
            {["home", "work", "personal", "ideas"].map((tag) => (
              <FilterButton
                key={tag}
                label={tag}
                active={filters.tag === tag}
                onClick={() => updateFilter("tag", tag)}
              />
            ))}
          </div>
        </div>

        {/* PRIORITY FILTERS */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Priority</p>
          <div className="flex flex-wrap gap-2">
            {["normal", "high", "urgent"].map((p) => (
              <FilterButton
                key={p}
                label={p}
                active={filters.priority === p}
                onClick={() => updateFilter("priority", p)}
              />
            ))}
          </div>
        </div>

        {/* STATUS FILTERS */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Status</p>
          <div className="flex flex-wrap gap-2">
            {["active", "todo", "done", "archived"].map((s) => (
              <FilterButton
                key={s}
                label={s}
                active={filters.status === s}
                onClick={() => updateFilter("status", s)}
              />
            ))}
          </div>
        </div>

        {/* BUTTON ROW */}
        <div className="flex justify-between mt-4">
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-200 rounded-md text-gray-800 hover:bg-gray-300"
          >
            Clear
          </button>

          <button
            onClick={close}
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersPopup;