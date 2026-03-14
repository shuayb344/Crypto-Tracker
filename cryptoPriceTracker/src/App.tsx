import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { MarketPage } from "./pages/MarketPage"
import { CryptoDetailsPage } from "./pages/CryptoDetailsPage"
import { NewsPage } from "./pages/NewsPage"
import { Layout } from "./components/Layout"


function App() {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/coins/:id" element={<CryptoDetailsPage />} />
      </Route>
      <Route path="/market" element={<MarketPage />} />
    </Routes>
  )
}

export default App
