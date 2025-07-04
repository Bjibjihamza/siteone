import React, { useState } from 'react';
import { Filter, Grid3X3, List } from 'lucide-react';
import { getProductsByGender } from '../data/products';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';

const MenPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    sizes: [] as string[],
    priceRange: { min: 0, max: 500 }
  });

  const menProducts = getProductsByGender('men');

  // Get unique filter values
  const categories = [...new Set(menProducts.map(p => p.category))];
  const brands = [...new Set(menProducts.map(p => p.brand))];
  const sizes = [...new Set(menProducts.flatMap(p => p.sizes))];

  const handleFilterChange = (filterType: string, value: any) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      categories: [],
      brands: [],
      sizes: [],
      priceRange: { min: 0, max: 500 }
    });
  };

  // Apply filters
  let filteredProducts = menProducts.filter(product => {
    if (selectedFilters.categories.length > 0 && !selectedFilters.categories.includes(product.category)) {
      return false;
    }
    if (selectedFilters.brands.length > 0 && !selectedFilters.brands.includes(product.brand)) {
      return false;
    }
    if (selectedFilters.sizes.length > 0 && !selectedFilters.sizes.some(size => product.sizes.includes(size))) {
      return false;
    }
    if (product.price < selectedFilters.priceRange.min || product.price > selectedFilters.priceRange.max) {
      return false;
    }
    return true;
  });

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Men's Collection
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore our comprehensive range of men's athletic and lifestyle footwear.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Men's Shoes ({sortedProducts.length})
            </h2>
            <p className="text-slate-600">Performance meets style in every step</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
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
            
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors lg:hidden"
            >
              <Filter size={16} />
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <FilterSidebar
              isOpen={true}
              onClose={() => {}}
              filters={{
                categories,
                brands,
                sizes,
                priceRange: { min: 0, max: 500 }
              }}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Mobile Filter */}
          <div className="lg:hidden">
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              filters={{
                categories,
                brands,
                sizes,
                priceRange: { min: 0, max: 500 }
              }}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-500 text-lg">No products found with the selected filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenPage;