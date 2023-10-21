import { Route, Routes } from "react-router-dom"
import PageContoh from "./pages/PageContoh"

function App() {

  return (
    <Routes>
      <Route path='/' element={<PageContoh />} />
    </Routes>
  )
}

export default App
