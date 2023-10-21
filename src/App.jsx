import { Route, Routes } from "react-router-dom"
import PageContoh from "./pages/PageContoh/PageContoh"

function App() {

  return (
    <Routes>
      <Route path='/' element={<PageContoh />} />
    </Routes>
  )
}

export default App
