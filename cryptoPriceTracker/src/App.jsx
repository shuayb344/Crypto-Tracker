import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"


function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/market" element={<div>Market Page</div>} />
      <Route path="/news" element={<div>News Page</div>} />
    </Routes>
    
  )
}

export default App
