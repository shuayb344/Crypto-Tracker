import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { MarketPage } from "./pages/MarketPage"
import { CryptoDetailsPage } from "./pages/CryptoDetailsPage"


function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/market" element={<MarketPage />} />
      <Route path="/news" element={<div>News Page</div>} />
      <Route path="/coins/:id" element={<CryptoDetailsPage />} />
    </Routes>
    
  )
}

export default App
