import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'BESTSELLER': return 'bg-gradient-to-r from-emerald-500 to-green-500';
      case 'NEW': return 'bg-gradient-to-r from-blue-500 to-indigo-500';
      case '20% OFF': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'SALE': return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'PREMIUM': return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      case 'CLASSIC': return 'bg-gradient-to-r from-gray-600 to-gray-700';
      case 'ICONIC': return 'bg-gradient-to-r from-red-600 to-red-700';
      default: return 'bg-gradient-to-r from-slate-500 to-slate-600';
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className={`${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
              {product.badge}
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Heart size={16} className="text-slate-600 hover:text-red-500" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200">
            <ShoppingCart size={16} />
            <span>Quick Add</span>
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-500 font-medium">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm text-slate-600">{product.rating}</span>
            <span className="text-sm text-slate-400">({product.reviews})</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center space-x-2 mb-4">
          {product.colors.slice(0, 3).map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs text-slate-500">+{product.colors.length - 3}</span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-slate-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <Link 
            to={`/product/${product.id}`}
            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;