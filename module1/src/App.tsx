
import { decrement, increment } from "./redux/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "./redux/hooks";


function App() {
  // const [count, setCount] = useState(0);

  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
      <p className="text-lg">This is a simple React application.</p>

      <div className="text-3xl">count {count}</div>
      <div >
        <button onClick={handleIncrement} className="bg-green-400 mr-2 p-2 rounded ">increment</button>
        <button onClick={handleDecrement} className="bg-red-400 p-2 rounded ">decrement</button>
      </div>
    </>
  )
}

export default App
