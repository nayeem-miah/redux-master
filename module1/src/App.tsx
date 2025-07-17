

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to My App</h1>
      <p className="text-lg">This is a simple React application.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => alert('Button clicked!')}>Click Me</button>
      <p className="text-lg">Enjoy exploring the features!</p>
    </>
  )
}

export default App
