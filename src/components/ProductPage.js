import React, { useState } from 'react';
import { Heart, ShoppingCart, Search, User, Star, Truck } from 'lucide-react';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('41');
  const [selectedColor, setSelectedColor] = useState('white');
  const [isFavorite, setIsFavorite] = useState(false);
  const [mainImage, setMainImage] = useState(0);

  const sizes = ['40.5', '41', '42', '43', '43.5', '44', '44.5', '45', '46'];
  const colors = [
    { name: 'white', color: '#f8f9fa', border: '#dee2e6' },
    { name: 'gray', color: '#6c757d', border: '#6c757d' },
    { name: 'black', color: '#212529', border: '#212529' }
  ];

  const images = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop'
  ];

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        {/* Header */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold fs-3 text-dark" href="#">
              BR.
            </a>
            
            <div className="d-flex align-items-center mx-auto" style={{ maxWidth: '400px', flex: 1 }}>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control border-0" 
                  placeholder="Search"
                  style={{ backgroundColor: '#f8f9fa' }}
                />
                <span className="input-group-text border-0" style={{ backgroundColor: '#f8f9fa', cursor: 'pointer' }}>
                  <Search size={20} />
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div className="position-relative" style={{ cursor: 'pointer' }}>
                <ShoppingCart size={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark" style={{ fontSize: '10px' }}>
                  4
                </span>
              </div>
              <Heart size={24} style={{ cursor: 'pointer' }} />
              <User size={24} style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </nav>

        {/* Navigation Menu */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link text-dark" href="#">Women</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Men</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Kids</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Sports</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Brands</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">New</a></li>
              <li className="nav-item"><a className="nav-link text-danger" href="#">Sale</a></li>
            </ul>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="container mt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none text-muted">Clothes and shoes</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className="text-decoration-none text-muted">Shoes</a>
              </li>
              <li className="breadcrumb-item active text-dark">Reebok</li>
            </ol>
          </nav>
        </div>

        {/* Product Section */}
        <div className="container mt-4">
          <div className="row">
            {/* Product Images */}
            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <img 
                      src={images[mainImage]} 
                      alt="Reebok Zig Kinetica 3"
                      className="img-fluid rounded"
                      style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="d-flex justify-content-center gap-2">
                    {images.map((img, index) => (
                      <div 
                        key={index}
                        className={`border rounded p-1 ${mainImage === index ? 'border-primary border-2' : 'border-secondary'}`}
                        onClick={() => setMainImage(index)}
                        style={{ cursor: 'pointer', width: '60px', height: '60px' }}
                      >
                        <img 
                          src={img} 
                          alt={`View ${index + 1}`}
                          className="img-fluid rounded"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                    <div 
                      className="d-flex align-items-center justify-content-center border rounded bg-light" 
                      style={{ width: '60px', height: '60px', cursor: 'pointer' }}
                    >
                      <span className="text-muted small">+4 more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="col-lg-6">
              <div className="ps-lg-4">
                {/* Brand */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <div 
                      className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-2"
                      style={{ width: '30px', height: '30px', fontSize: '14px' }}
                    >
                      R
                    </div>
                    <span className="text-muted">Reebok</span>
                  </div>
                  <span className="badge bg-primary">BESTSELLER</span>
                </div>

                {/* Product Title */}
                <h1 className="h2 fw-bold mb-3 text-dark">
                  Shoes Reebok Zig Kinetica 3
                </h1>

                {/* Rating */}
                <div className="d-flex align-items-center mb-3">
                  <div className="d-flex me-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
                    ))}
                  </div>
                  <span className="text-muted small">(Reviews)</span>
                </div>

                {/* Price */}
                <h2 className="h1 fw-bold mb-4 text-dark">
                  $199.00
                </h2>

                {/* Color Selection */}
                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">
                    Color: <span className="text-capitalize fw-normal">{selectedColor}</span>
                  </h6>
                  <div className="d-flex gap-2">
                    {colors.map((color) => (
                      <div
                        key={color.name}
                        className={`border rounded p-1 ${selectedColor === color.name ? 'border-primary border-2' : 'border-secondary'}`}
                        onClick={() => setSelectedColor(color.name)}
                        style={{ cursor: 'pointer', width: '40px', height: '40px' }}
                      >
                        <div 
                          className="w-100 h-100 rounded"
                          style={{ backgroundColor: color.color }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Size: EU Men</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`btn ${selectedSize === size ? 'btn-dark' : 'btn-outline-secondary'}`}
                        onClick={() => setSelectedSize(size)}
                        style={{ minWidth: '50px' }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <small className="text-muted">Size guide</small>
                </div>

                {/* Add to Cart Button */}
                <div className="d-flex gap-3 mb-4">
                  <button
                    className="btn btn-dark flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                    style={{ padding: '12px 24px' }}
                  >
                    <ShoppingCart size={20} />
                    Add to cart
                  </button>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="btn btn-outline-secondary"
                    style={{ padding: '12px' }}
                  >
                    <Heart size={20} fill={isFavorite ? 'red' : 'none'} color={isFavorite ? 'red' : 'currentColor'} />
                  </button>
                </div>

                {/* Free Delivery */}
                <div className="d-flex align-items-center text-muted">
                  <Truck size={20} className="me-2" />
                  <span>Free delivery on orders over $50.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;