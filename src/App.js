import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailProductPage from "./pages/DetailProductPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<DetailProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
