import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailNationsKits from './pages/DetailNationKits';
import DetailNologoPage from './pages/DetailNologoPage';
import DetailProductPage from './pages/DetailProductPage';
import HomePage from './pages/HomePage';
import ListProductOfClub from './pages/ListProductOfClub';
import NationsKitsPage from './pages/NationsKitsPage';
import NologoPage from './pages/NologoPages';
import ProductPage from './pages/ProductPage';
import ViewCartPage from './pages/ViewCartPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<DetailProductPage />} />
        <Route path="/club/:club" element={<ListProductOfClub />} />
        <Route path="/club/:club/:id" element={<DetailProductPage />} />
        <Route path="/nologo" element={<NologoPage />} />
        <Route path="/nologo/:id" element={<DetailNologoPage />} />

        <Route path="/nations" element={<NationsKitsPage />} />
        <Route path="/nations/:id" element={<DetailNationsKits />} />

        <Route path="/viewcart" element={<ViewCartPage />} />
      </Routes>
    </div>
  );
}

export default App;
