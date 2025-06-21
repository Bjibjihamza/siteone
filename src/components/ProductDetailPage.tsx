import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check
} from 'lucide-react';
import { getProductById } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

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

  const nextImage = () => {
    setMainImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setMainImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center space-x-2 text-sm text-slate-600">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/${product.gender}`} className="hover:text-indigo-600 transition-colors capitalize">
            {product.gender}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl shadow-sm overflow-hidden">
              <img 
                src={product.images[mainImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {product.badge && (
                <div className="absolute top-6 left-6">
                  <span className={`${getBadgeColor(product.badge)} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                    {product.badge}
                  </span>
                </div>
              )}

              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 p-2 rounded-full transition-all duration-200 shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 p-2 rounded-full transition-all duration-200 shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    mainImage === index 
                      ? 'border-indigo-500 ring-2 ring-indigo-200' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Brand and Rating */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">
                  {product.brand[0]}
                </div>
                <span className="text-slate-600 font-medium">{product.brand}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-slate-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-slate-500 line-through">${product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Color</h3>
              <div className="flex items-center space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-12 h-12 rounded-full border-4 transition-all duration-200 ${
                      selectedColor === index 
                        ? 'border-indigo-500 ring-2 ring-indigo-200' 
                        : 'border-white shadow-md hover:border-slate-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 mt-2">
                Size Guide
              </button>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-slate-50 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-slate-50 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4">
              <button
                disabled={!selectedSize}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  selectedSize
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg transform hover:scale-105'
                    : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  isFavorite
                    ? 'border-red-500 bg-red-50 text-red-500'
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-slate-200">
              <div className="text-center">
                <Truck className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-900">Free Shipping</p>
                <p className="text-xs text-slate-600">On orders over $50</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-900">Easy Returns</p>
                <p className="text-xs text-slate-600">30-day return policy</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-900">Warranty</p>
                <p className="text-xs text-slate-600">1-year manufacturer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16">
          <div className="border-b border-slate-200">
            <nav className="flex space-x-8">
              {['description', 'features', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors capitalize ${
                    activeTab === tab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-slate-700 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">Customer Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">{product.rating} out of 5</span>
                    <span className="text-sm text-slate-600">({product.reviews} reviews)</span>
                  </div>
                </div>
                <p className="text-slate-600">Reviews feature coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;