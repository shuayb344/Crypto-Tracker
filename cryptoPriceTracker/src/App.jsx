import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { MarketPage } from "./pages/MarketPage"
import { CryptoDetailsPage } from "./pages/CryptoDetailsPage"
import { NewsPage } from "./pages/NewsPage"


function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/market" element={<MarketPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/coins/:id" element={<CryptoDetailsPage />} />
    </Routes>
    
  )
}

export default App
