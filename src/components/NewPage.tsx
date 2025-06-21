import React, { useState } from 'react';
import { Filter, Grid3X3, List, Sparkles } from 'lucide-react';
import { getNewProducts } from '../data/products';
import ProductCard from './ProductCard';

const NewPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const newProducts = getNewProducts();

  const categories = [
    { id: 'all', name: 'All New', count: newProducts.length },
    { id: 'running', name: 'Running', count: newProducts.filter(p => p.category === 'running').length },
    { id: 'lifestyle', name: 'Lifestyle', count: newProducts.filter(p => p.category === 'lifestyle').length },
    { id: 'basketball', name: 'Basketball', count: newProducts.filter(p => p.category === 'basketball').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? newProducts 
    : newProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-emerald-500 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-white mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                New Arrivals
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl">
              Be the first to discover our latest footwear innovations and trending styles.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Latest Releases ({filteredProducts.length})
            </h2>
            <p className="text-slate-600">Fresh styles and innovative designs just dropped</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="newest">Newest First</option>
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Grid3X3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <List size={20} />
              </button>
            </div>
            
            <button className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors">
              <Filter size={16} />
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No new products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPage;