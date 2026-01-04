# 📝 NotesMan — Advanced Notes Management Application

NotesMan is a production-grade note-taking web application built with React.js and Tailwind CSS. It provides a complete workflow for creating, editing, organizing, and managing notes through a clean, responsive, and intuitive user interface.

The project emphasizes real-world UI/UX patterns, modular architecture, and predictable state management, making it a strong example of a scalable frontend application.

---

## 🚀 Features

- Create, edit, update, and delete notes
- Pin and unpin notes with automatic sorting
- Real-time search using title or description
- Tagging system (Home, Work, Personal, Ideas)
- Priority levels (Normal, High, Urgent)
- Status tracking (Active, To-Do, Done, Archived)
- Soft-delete Trash system with Restore and Delete Forever
- Dedicated Trash view with isolated controls
- Fully responsive (desktop and mobile)
- Mobile:
  - Modal-based Add Notes
  - Full-screen preview panel
- Persistent offline storage using localStorage
- Reusable, clean component architecture
- Smooth transitions, hover effects, and custom scrollbars
- Fully controlled components with predictable state flow

---

## 🧱 Technology Stack

- React.js
- Tailwind CSS
- Lucide Icons
- LocalStorage
- Vite

---

## 🏗️ Architecture Overview

The application follows a modular, component-driven architecture.

### Core Components

- **NotesLayout**
  - Central controller for global state
  - Handles notes, selection, search, trash logic, and persistence

- **List**
  - Displays active notes
  - Handles selection and pinning

- **TrashList**
  - Displays deleted notes
  - Provides Restore and Delete Forever actions

- **Preview**
  - Dynamic note preview panel
  - Supports edit and delete actions

- **AddNotes**
  - Controlled form component
  - Used for both creating and editing notes

- **Sidebar**
  - Global navigation (Home, Create, Reset, Filter, Trash)

### State Management

- Single source of truth via lifted state in NotesLayout
- Controlled inputs for all forms
- Derived state for search, sorting, and filtering
- Persistent sync with localStorage

---

## ✨ Key Highlights

- Production-quality UI and UX
- Complete CRUD functionality
- Clean separation of concerns
- State-driven navigation across views
- Safe, non-destructive deletion workflow
- Desktop: split-pane layout
- Mobile: modal + full-screen interactions

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/anshul051/notes-app
cd notes-man
npm install
npm run dev
```
---

## ▶️ Usage

Run the application locally:

```bash
npm run dev
```

Open in your browser: http://localhost:5173/

---

## 🔮 Future Improvements
- Dark mode support
- Backend integration (Node.js + MongoDB)
- User authentication
- Custom tag creation
- Drag-and-drop note reordering
- Rich-text editor for notes

---

## 📄 License
This project is open-source and available under the MIT License.
