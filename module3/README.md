
# ✅ Task Management App (Frontend)

A simple task management application built with **React**, **TypeScript**, **Redux Toolkit (RTK Query)**, **Tailwind CSS**, and **shadcn/ui**.  
This app connects to the [taskmaster-rtk-server](https://github.com/Apollo-Level2-Web-Dev/taskmaster-rtk-server) backend API code .

---

## 🚀 Features

- ✅ Add New Task  
- 📋 View All Tasks  
- ❌ Delete Task  

---

## 🔗 Backend Repository

👉 [GitHub – taskmaster-rtk-server](https://github.com/Apollo-Level2-Web-Dev/taskmaster-rtk-server)

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Redux Toolkit, RTK Query, Tailwind CSS, shadcn/ui  
- **Backend**: Node.js, Express, MongoDB (via Mongoose)

---

## 📂 Project Structure (Frontend)

```

src/
├── components/         # Reusable UI components
├── lib/                # Utility functions
├── pages/
│   ├── Task.tsx        # Task List UI
│   └── User.tsx        # (Not implemented or optional)
├── redux/
│   ├── features/
│   │   ├── task/       # RTK Query API & Slice for tasks
│   └── store.ts        # Redux store setup
├── routes/             # Application routes
├── App.tsx             # App root

````

---

## ▶️ Getting Started (Frontend)

### 1️⃣ Clone the Frontend Repo

```bash
git clone https://github.com/nayeem-miah/redux-master.git
cd redux-master/module3
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the App

```bash
npm run dev
```

> 🔧 Make sure the [backend server](https://github.com/Apollo-Level2-Web-Dev/taskmaster-rtk-server) is running at `http://localhost:5000`

---

## 🧪 API Endpoints (Used by RTK Query)

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/tasks`     | Fetch all tasks |
| POST   | `/tasks`     | Add new task    |
| DELETE | `/tasks/:id` | Delete a task   |

---

## ✨ UI & Styling

This app uses [**shadcn/ui**](https://ui.shadcn.com/) with **Tailwind CSS** for beautiful, accessible components like:

* Cards
* Buttons
* Form elements

---
