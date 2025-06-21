import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Award,
  TrendingUp,
  Truck,
  Clock,
  Flame
} from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const featuredProducts = products.slice(0, 6);

  // Flash sale product (first product with discount)
  const flashSaleProduct = products.find(p => p.originalPrice);

  const heroSlides = [
    {
      title: 'Step Into Excellence',
      subtitle: 'Discover the latest collection of premium athletic footwear',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      cta: 'Shop Now'
    },
    {
      title: 'Performance Redefined',
      subtitle: 'Experience comfort and style with our innovative designs',
      image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      cta: 'Explore Collection'
    },
    {
      title: 'Unleash Your Potential',
      subtitle: 'Professional-grade footwear for every athlete',
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      cta: 'Discover More'
    }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $50'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% protected checkout'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Authentic products only'
    },
    {
      icon: TrendingUp,
      title: 'Best Prices',
      description: 'Competitive pricing guaranteed'
    }
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches 0
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {heroSlides[currentSlide].subtitle}
              </p>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl flex items-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <span>{heroSlides[currentSlide].cta}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Flash Sale Banner */}
      {flashSaleProduct && (
        <div className="bg-gradient-to-r from-red-500 to-orange-500 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <div className="flex items-center mb-4">
                  <Flame className="w-8 h-8 mr-3 animate-pulse" />
                  <h2 className="text-3xl font-bold">Flash Sale!</h2>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{flashSaleProduct.name}</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold">${flashSaleProduct.price}</span>
                  <span className="text-xl line-through opacity-75">${flashSaleProduct.originalPrice}</span>
                  <span className="bg-white text-red-600 px-3 py-1 rounded-full font-bold">
                    {Math.round(((flashSaleProduct.originalPrice! - flashSaleProduct.price) / flashSaleProduct.originalPrice!) * 100)}% OFF
                  </span>
                </div>
                
                {/* Countdown Timer */}
                <div className="flex items-center space-x-4 mb-6">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg font-medium">Ends in:</span>
                  <div className="flex space-x-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                      <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                      <div className="text-xs">Hours</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                      <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                      <div className="text-xs">Minutes</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                      <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                      <div className="text-xs">Seconds</div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to={`/product/${flashSaleProduct.id}`}
                  className="bg-white text-red-600 font-semibold py-3 px-8 rounded-xl hover:bg-slate-100 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src={flashSaleProduct.image} 
                    alt={flashSaleProduct.name}
                    className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-black font-bold text-lg px-4 py-2 rounded-full animate-bounce">
                    HOT DEAL!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <feature.icon size={24} className="text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Products</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our most popular and trending footwear collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Releases
            </h2>
            <p className="text-white/90 mb-8">
              Be the first to know about new arrivals, exclusive deals, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;