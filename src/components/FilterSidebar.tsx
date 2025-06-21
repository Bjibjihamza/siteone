import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    categories: string[];
    brands: string[];
    sizes: string[];
    priceRange: { min: number; max: number };
  };
  selectedFilters: {
    categories: string[];
    brands: string[];
    sizes: string[];
    priceRange: { min: number; max: number };
  };
  onFilterChange: (filterType: string, value: any) => void;
  onClearFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filters,
  selectedFilters,
  onFilterChange,
  onClearFilters
}) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    sizes: true,
    price: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = selectedFilters.categories.includes(category)
      ? selectedFilters.categories.filter(c => c !== category)
      : [...selectedFilters.categories, category];
    onFilterChange('categories', newCategories);
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = selectedFilters.brands.includes(brand)
      ? selectedFilters.brands.filter(b => b !== brand)
      : [...selectedFilters.brands, brand];
    onFilterChange('brands', newBrands);
  };

  const handleSizeChange = (size: string) => {
    const newSizes = selectedFilters.sizes.includes(size)
      ? selectedFilters.sizes.filter(s => s !== size)
      : [...selectedFilters.sizes, size];
    onFilterChange('sizes', newSizes);
  };

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    onFilterChange('priceRange', {
      ...selectedFilters.priceRange,
      [type]: value
    });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white shadow-xl lg:shadow-none
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={onClearFilters}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Clear All
              </button>
              <button
                onClick={onClose}
                className="lg:hidden p-1 hover:bg-slate-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Categories */}
            <div>
              <button
                onClick={() => toggleSection('categories')}
                className="flex items-center justify-between w-full text-left font-medium text-slate-900 mb-3"
              >
                Categories
                {expandedSections.categories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expandedSections.categories && (
                <div className="space-y-2">
                  {filters.categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-slate-700 capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Brands */}
            <div>
              <button
                onClick={() => toggleSection('brands')}
                className="flex items-center justify-between w-full text-left font-medium text-slate-900 mb-3"
              >
                Brands
                {expandedSections.brands ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expandedSections.brands && (
                <div className="space-y-2">
                  {filters.brands.map((brand) => (
                    <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.brands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-slate-700">{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Sizes */}
            <div>
              <button
                onClick={() => toggleSection('sizes')}
                className="flex items-center justify-between w-full text-left font-medium text-slate-900 mb-3"
              >
                Sizes
                {expandedSections.sizes ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expandedSections.sizes && (
                <div className="grid grid-cols-3 gap-2">
                  {filters.sizes.map((size) => (
                    <label key={size} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.sizes.includes(size)}
                        onChange={() => handleSizeChange(size)}
                        className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-slate-700">{size}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range */}
            <div>
              <button
                onClick={() => toggleSection('price')}
                className="flex items-center justify-between w-full text-left font-medium text-slate-900 mb-3"
              >
                Price Range
                {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expandedSections.price && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={selectedFilters.priceRange.min || ''}
                      onChange={(e) => handlePriceChange('min', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <span className="text-slate-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={selectedFilters.priceRange.max || ''}
                      onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="text-xs text-slate-500">
                    Price range: ${filters.priceRange.min} - ${filters.priceRange.max}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar; 