import React, { useState } from 'react';
import { Filter, Grid3X3, List, Percent, Clock } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';

const SalesPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    sizes: [] as string[],
    priceRange: { min: 0, max: 500 }
  });

  // Get products on sale (with originalPrice)
  const saleProducts = products.filter(product => product.originalPrice);

  // Get unique filter values
  const categories = [...new Set(saleProducts.map(p => p.category))];
  const brands = [...new Set(saleProducts.map(p => p.brand))];
  const sizes = [...new Set(saleProducts.flatMap(p => p.sizes))];

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
  let filteredProducts = saleProducts.filter(product => {
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

  // Calculate total savings
  const totalSavings = saleProducts.reduce((total, product) => {
    if (product.originalPrice) {
      return total + (product.originalPrice - product.price);
    }
    return total;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-red-500 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center">
              <Percent className="mr-4" size={48} />
              Sale Collection
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Limited time offers with incredible discounts on premium footwear
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">{saleProducts.length}</div>
              <div className="text-slate-600">Products on Sale</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">${totalSavings.toFixed(2)}</div>
              <div className="text-slate-600">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2 flex items-center justify-center">
                <Clock size={20} className="mr-2" />
                Limited Time
              </div>
              <div className="text-slate-600">Offers Expire Soon</div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Sale Products ({filteredProducts.length})
            </h2>
            <p className="text-slate-600">Amazing deals on premium footwear</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select 
              className="px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="discount-high">Highest Discount</option>
              <option value="discount-low">Lowest Discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
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
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Percent className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                <p className="text-slate-500 text-lg">No sale products found with the selected filters.</p>
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
                {filteredProducts.map((product) => (
                  <div key={product.id} className="relative">
                    <ProductCard product={product} />
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sale Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
            <p className="text-lg mb-6 opacity-90">
              These incredible deals won't last forever. Shop now and save big on premium footwear.
            </p>
            <button className="bg-white text-red-600 font-semibold py-3 px-8 rounded-xl hover:bg-slate-100 transition-colors">
              Shop All Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage; 