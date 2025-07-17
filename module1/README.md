# Redux Counter App

This is a simple React + TypeScript counter application that uses **Redux Toolkit** for state management. Users can increment or decrement the counter value by a specified number.

## 🧩 Features

- Increment count by 1 or custom number
- Decrement count by 1 or custom number
- State managed using Redux Toolkit
- Type-safe custom hooks (`useAppDispatch`, `useAppSelector`)
- Styled with Tailwind CSS

## 🏗️ Project Structure

```

src/
│
├── App.tsx                     # Main component with counter UI
├── index.tsx                  # App entry with Redux Provider
├── redux/
│   ├── features/
│   │   └── counter/
│   │       └── counterSlice.ts  # Counter slice with reducers
│   ├── hooks.ts               # Custom typed Redux hooks
│   └── store.ts               # Redux store configuration

````

## 🚀 Getting Started

### 📦 Installation

```bash
git clone https://github.com/your-username/redux-counter-app.git
cd redux-counter-app
npm install
````

### ▶️ Run the app

```bash
npm run dev
```

### 🛠️ Build the app

```bash
npm run build
```

## 🧠 Technologies Used

* React + TypeScript
* Redux Toolkit
* Tailwind CSS
* Vite (or CRA if applicable)

## 📄 License

This project is licensed under the MIT License.

```