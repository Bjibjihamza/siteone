import React, { useState, useEffect } from 'react';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    setIsLoading(false);
  }, []);

  const removeFromFavorites = (productId: number) => {
    const newFavorites = favorites.filter(id => id !== productId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const addToCart = (productId: number) => {
    // Add to cart logic here
    console.log('Added to cart:', productId);
  };

  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading favorites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-pink-500 to-red-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center">
              <Heart className="mr-4" size={48} />
              My Favorites
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Your saved items and wishlist products
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-slate-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">No favorites yet</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Start adding products to your favorites by clicking the heart icon on any product card.
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Favorites ({favoriteProducts.length})
                </h2>
                <p className="text-slate-600">
                  {favoriteProducts.length === 1 
                    ? '1 item in your favorites' 
                    : `${favoriteProducts.length} items in your favorites`
                  }
                </p>
              </div>
              
              <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                <button
                  onClick={() => {
                    setFavorites([]);
                    localStorage.removeItem('favorites');
                  }}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  <Trash2 size={16} />
                  <span>Clear All</span>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteProducts.map((product) => (
                <div key={product.id} className="relative group">
                  <ProductCard product={product} />
                  
                  {/* Quick Actions Overlay */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => addToCart(product.id)}
                      className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingCart size={16} className="text-indigo-600" />
                    </button>
                    <button
                      onClick={() => removeFromFavorites(product.id)}
                      className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 transition-colors"
                      title="Remove from Favorites"
                    >
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions Bar */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="mb-4 sm:mb-0">
                  <h3 className="font-semibold text-slate-900 mb-2">Quick Actions</h3>
                  <p className="text-sm text-slate-600">
                    Add all favorites to cart or share your wishlist
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      favoriteProducts.forEach(product => addToCart(product.id));
                    }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
                  >
                    <ShoppingCart size={16} />
                    <span>Add All to Cart</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors">
                    <span>Share Wishlist</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage; 