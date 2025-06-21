import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import WomenPage from './components/WomenPage';
import MenPage from './components/MenPage';
import KidsPage from './components/KidsPage';
import SportsPage from './components/SportsPage';
import BrandsPage from './components/BrandsPage';
import NewPage from './components/NewPage';
import ProductDetailPage from './components/ProductDetailPage';
import FavoritesPage from './components/FavoritesPage';
import SalesPage from './components/SalesPage';
import LoginPage from './components/LoginPage';
import AllProductsPage from './components/AllProductsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/sale" element={<SalesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<AllProductsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;