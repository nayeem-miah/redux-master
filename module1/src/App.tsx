
import { decrement, increment } from "./redux/features/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "./redux/hooks";


function App() {
  // const [count, setCount] = useState(0);

  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (number: number) => {
    dispatch(increment(number))
  }
  const handleDecrement = (number: number) => {
    dispatch(decrement(number))
  }
  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
      <p className="text-lg">This is a simple React application.</p>

      <div className="text-3xl">count {count}</div>
      <div >
        <button onClick={() => handleIncrement(1)} className="bg-green-400 mr-2 p-2 rounded mb-2 ">increment</button>
        <button onClick={() => handleIncrement(5)} className="bg-green-400 mr-2 p-2 rounded mb-2 ">increment By 5</button>
        <button onClick={() => handleDecrement(1)} className="bg-red-400 p-2 rounded mr-1 ">decrement</button>
        <button onClick={() => handleDecrement(5)} className="bg-red-400 p-2 rounded ">decrement by 5</button>
      </div>
    </>
  )
}

export default App
