export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  badge?: string;
  colors: string[];
  sizes: string[];
  category: string;
  gender: string;
  description: string;
  features: string[];
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    brand: 'Nike',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    ],
    badge: 'BESTSELLER',
    colors: ['#000000', '#ffffff', '#ff6b6b'],
    sizes: ['40', '40.5', '41', '42', '43', '44', '45'],
    category: 'running',
    gender: 'women',
    description: 'The Nike Air Max 270 delivers visible comfort with the largest Max Air unit yet. Inspired by the Air Max 93 and Air Max 180, it features a sleek upper with a bold heel design.',
    features: [
      'Max Air unit in heel for superior cushioning',
      'Engineered mesh upper for breathability',
      'Rubber outsole with waffle pattern for traction',
      'Foam midsole for lightweight comfort'
    ]
  },
  {
    id: 2,
    name: 'Adidas Ultraboost 22',
    brand: 'Adidas',
    price: 189.99,
    originalPrice: 220.00,
    rating: 4.9,
    reviews: 189,
    image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    ],
    badge: 'NEW',
    colors: ['#4a90e2', '#000000', '#ffffff'],
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    category: 'running',
    gender: 'men',
    description: 'Experience incredible energy return with every step. The Ultraboost 22 features responsive BOOST midsole technology and a Primeknit upper for adaptive comfort.',
    features: [
      'BOOST midsole for energy return',
      'Primeknit upper adapts to your foot',
      'Continental rubber outsole for grip',
      'Linear Energy Push system for forward motion'
    ],
    isNew: true
  },
  {
    id: 3,
    name: 'Reebok Zig Kinetica 3',
    brand: 'Reebok',
    price: 199.00,
    originalPrice: 249.00,
    rating: 4.7,
    reviews: 127,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    ],
    badge: '20% OFF',
    colors: ['#ffffff', '#64748b', '#0f172a'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    category: 'training',
    gender: 'men',
    description: 'The Zig Kinetica 3 features innovative ZigTech sole technology that returns energy with every step. Perfect for high-intensity training and everyday wear.',
    features: [
      'ZigTech sole for energy return',
      'Floatride Fuel foam for cushioning',
      'Breathable mesh upper',
      'Durable rubber outsole'
    ]
  },
  {
    id: 4,
    name: 'Puma RS-X3',
    brand: 'Puma',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.6,
    reviews: 98,
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    ],
    badge: 'SALE',
    colors: ['#ff6b6b', '#4ecdc4', '#45b7d1'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    category: 'lifestyle',
    gender: 'kids',
    description: 'The RS-X3 brings retro-futuristic style with modern comfort. Features bold colorways and premium materials for standout street style.',
    features: [
      'RS foam for lightweight cushioning',
      'Synthetic leather and mesh upper',
      'Rubber outsole for durability',
      'Bold colorway options'
    ]
  },
  {
    id: 5,
    name: 'New Balance 990v5',
    brand: 'New Balance',
    price: 174.99,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    ],
    badge: 'PREMIUM',
    colors: ['#8b5a3c', '#2c3e50', '#ffffff'],
    sizes: ['40', '41', '42', '43', '44', '45', '46'],
    category: 'lifestyle',
    gender: 'men',
    description: 'The 990v5 represents the pinnacle of New Balance craftsmanship. Made in USA with premium materials and superior comfort technology.',
    features: [
      'ENCAP midsole technology',
      'Premium pigskin and mesh upper',
      'Blown rubber outsole',
      'Made in USA craftsmanship'
    ]
  },
  {
    id: 6,
    name: 'Converse Chuck 70',
    brand: 'Converse',
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.5,
    reviews: 203,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    ],
    badge: 'CLASSIC',
    colors: ['#000000', '#ffffff', '#ff6b6b'],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    category: 'lifestyle',
    gender: 'women',
    description: 'The Chuck 70 is built off the original 1970s design with premium materials and enhanced comfort. A timeless classic with modern updates.',
    features: [
      'Premium canvas upper',
      'OrthoLite insole for comfort',
      'Vintage rubber toe cap',
      'Classic All Star styling'
    ]
  },
  {
    id: 7,
    name: 'Jordan Air Jordan 1',
    brand: 'Jordan',
    price: 169.99,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    ],
    badge: 'ICONIC',
    colors: ['#000000', '#ffffff', '#dc2626'],
    sizes: ['40', '41', '42', '43', '44', '45', '46'],
    category: 'basketball',
    gender: 'men',
    description: 'The shoe that started it all. The Air Jordan 1 retains its classic appeal with premium leather construction and iconic colorways.',
    features: [
      'Premium leather upper',
      'Air-Sole unit in heel',
      'Rubber cupsole',
      'Classic Jordan Wings logo'
    ],
    isNew: true
  },
  {
    id: 8,
    name: 'Vans Old Skool',
    brand: 'Vans',
    price: 64.99,
    rating: 4.4,
    reviews: 189,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    ],
    colors: ['#000000', '#ffffff', '#8b5a3c'],
    sizes: ['35', '36', '37', '38', '39', '40'],
    category: 'lifestyle',
    gender: 'kids',
    description: 'The Vans Old Skool is a classic skate shoe featuring the iconic side stripe. Durable construction meets timeless style.',
    features: [
      'Canvas and suede upper',
      'Signature rubber waffle outsole',
      'Padded collar for comfort',
      'Iconic side stripe design'
    ]
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductsByGender = (gender: string) => {
  return products.filter(product => product.gender === gender);
};

export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};