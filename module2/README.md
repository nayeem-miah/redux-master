# 🧩 Module2 - React Redux Toolkit + TypeScript App

A scalable React application built with **Redux Toolkit**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. This project follows a modular structure for better maintainability and scalability.

---

## 🛠️ Tech Stack

- ⚛️ React + TypeScript
- 🧰 Redux Toolkit
- 🎨 Tailwind CSS
- 🧩 shadcn/ui
- 🗂️ Modular folder structure

---

## 📁 Folder Structure

```

src/
│
├── assets/             # Static assets (images, icons, etc.)
├── components/         # Reusable UI components
├── lib/                # Utility libraries or helper functions
├── pages/              # Page-level components
│   ├── Task.tsx
│   └── User.tsx
├── providers/          # Providers (e.g., Redux Provider)
├── redux/              # Redux state management
│   ├── features/       # Slices per feature
│   │   ├── counter/
│   │   ├── task/
│   │   └── users/
│   ├── middlewares/    # Custom middlewares (if any)
│   ├── hooks.ts        # Typed Redux hooks
│   └── store.ts        # Redux store configuration
├── routes/             # Route definitions
└── App.tsx             # Main app component

````

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nayeem-miah/redux-master.git
cd module2
````
 
### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

---

## 🧠 Key Features

* 🎯 Feature-based Redux slices (`counter`, `task`, `users`)
* 🧵 Type-safe Redux logic with `hooks.ts`
* 📦 Custom middleware support
* 💅 Styled using Tailwind CSS and `shadcn/ui`
* 🔄 Scalable and clean folder structure

---

## 📦 Production Build

```bash
npm run build
```

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

