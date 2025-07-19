// import { Button } from "@/components/ui/button"
import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <div>
      {/* <Button>Click me</Button> */}
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App