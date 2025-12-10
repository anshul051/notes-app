# NotesMan – Advanced Notes Management Application

NotesMan is a production-grade note-taking web application built with React.js and Tailwind CSS. It provides a complete workflow for creating, editing, organizing, and managing notes with a clean, responsive, and intuitive interface. The project focuses heavily on UI/UX quality, modular architecture, and maintainable state management.

## Features
• Create, edit, delete, and update notes

• Pin/unpin notes with automatic sorting

• Search notes in real time using title or description

• Tagging system (Home, Work, Personal, Ideas)

• Priority levels (Normal, High, Urgent)

• Status tracking (Active, To-Do, Done, Archived)

• Soft-delete Trash system with Restore and Delete Forever options

• Dedicated Trash view with isolated controls

• Mobile and desktop responsive layout

• Mobile sliding preview panel

• Add Notes modal for mobile devices

• Persistent storage using localStorage

• Clean component structure with reusable components

• Custom scrollbars, smooth transitions, hover interactions

• Error-free controlled components and predictable state management

## Technology Stack
• React.js

• Tailwind CSS

• Lucide Icons

• LocalStorage for offline persistence

• Vite (build and dev environment)

## Architecture Overview
The application is built using a modular component architecture:

• NotesLayout: Main controller component handling global state, view logic, search, trash, and data persistence

• List: Displays active notes with pin controls

• TrashList: Dedicated list for deleted notes with Restore and Delete Forever actions

• Preview: Dynamic preview panel with edit/delete/support for trash mode

• AddNotes: Controlled form used for both creating and editing notes

• Sidebar: Navigation and global actions (Home, Create, Reset, Trash)

The app uses a combination of React state, controlled inputs, conditional rendering, and filtered derived state to maintain a predictable and scalable UI flow. All notes are stored and synced in localStorage for instant persistence across browser reloads.

## Key Highlights
• Production-quality UI interactions and responsive design

• Full CRUD functionality with advanced organization features

• Clean separation of concerns between layout, logic, and reusable UI components

• State-driven navigation between Create, Preview, List, and Trash views

• Non-destructive deletion workflow for safe note management

• Desktop → Split layout

• Mobile → Modal-based add notes + full-screen preview panel

## Installation
Clone the repository and install dependencies:

   | git clone <your-repo-link>

   | cd notes-man
   | npm install
   | npm run dev

## Usage

   | Run the application locally: npm run dev

   | Open the app at:
    http://localhost:5173/

## Future Improvements
• Dark mode

• Cloud sync using a backend (Node.js + MongoDB)

• User authentication

• Custom tag creation

• Drag-and-drop note reordering

• Rich-text editor for descriptions

## License
This project is open-source and available under the MIT License.