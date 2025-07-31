import React from 'react';

// Updated Product Data with variants and removed "Order Based Foods"
const rawProductsData = [
  // Traditional Foods
  {
    id: 'tf1',
    name: 'Sakinalu',
    teluguName: 'సకినాలు',
    description: 'Crispy, spiral-shaped traditional snack made from rice flour and sesame seeds, a festive delight.',
    category: 'Traditional Foods',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753897576/sakinalu_xvnccr.jpg',
    variants: [
      { size: '250g', price: 75.00 },
      { size: '500g', price: 130.00 },
      { size: '1KG', price: 219.00 },
    ],
  },
  {
    id: 'tf2',
    name: 'Gyaralu',
    teluguName: 'గ్యారలు',
    description: 'Deep-fried, savory rice flour fritters, a popular and crunchy Andhra snack, perfect with tea.',
    category: 'Traditional Foods',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753897580/gyarlu_imydbx.jpg',
    variants: [
      { size: '250g', price: 75.00 },
      { size: '500g', price: 130.00 },
      { size: '1KG', price: 219.00 },
    ],
  },
  {
    id: 'tf3',
    name: 'Ariselu',
    teluguName: 'అరిసెలు',
    description: 'Sweet rice flour cakes, deep-fried and coated with jaggery syrup, a traditional festive delicacy.',
    category: 'Traditional Foods',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753898150/ARI_f4okfn.png',
    variants: [
      { size: '250g', price: 79.00 },
      { size: '500g', price: 140.00 },
      { size: '1KG', price: 239.00 },
    ],
  },
  {
    id: 'tf4',
    name: 'Murukulu',
    teluguName: 'మురుకులు',
    description: 'Crunchy, savory spirals made from rice flour and urad dal, seasoned with spices, perfect with tea.',
    category: 'Traditional Foods',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753897992/MURK_d2iehe.png',
    variants: [
      { size: '250g', price: 75.00 },
      { size: '500g', price: 130.00 },
      { size: '1KG', price: 209.00 },
    ],
  },
  {
    id: 'tf5',
    name: 'Bondhi Laddu',
    teluguName: 'బొంది లడ్డు',
    description: 'Sweet spherical desserts made from tiny fried gram flour pearls, soaked in sugar syrup, a delightful treat.',
    category: 'Traditional Foods',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753898501/LD_-2_hr07aa.png',
    variants: [
      { size: '250g', price: 89.00 },
      { size: '500g', price: 160.00 },
      { size: '1KG', price: 249.00 },
    ],
  },
  {
    id: 'tf6',
    name: 'Bondhi',
    teluguName: 'బొంది',
    description: 'Savory fried gram flour pearls, often used in mixtures or as a standalone snack, light and crispy.',
    category: 'Traditional Foods',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753899025/BONDI_aa33vb.png',
    variants: [
      { size: '250g', price: 79.00 },
      { size: '500g', price: 140.00 },
      { size: '1KG', price: 239.00 },
    ],
  },

  // Traditional Snacks
  {
    id: 'ts1',
    name: 'Karam Gavvalu',
    teluguName: 'కారం గవ్వలు',
    description: 'Spicy, crispy, shell-shaped snacks made from flour, deep-fried to a perfect crunch.',
    category: 'Traditional Snacks',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753899089/KR_GAVVALU_s9lojx.png',
    variants: [
      { size: '250g', price: 59.00 },
      { size: '500g', price: 100.00 },
      { size: '1KG', price: 199.00 },
    ],
  },
  {
    id: 'ts2',
    name: 'Sweet Gavvalu',
    teluguName: 'తీపి గవ్వలు',
    description: 'Sweet, shell-shaped snacks, deep-fried and coated in a delicate jaggery syrup.',
    category: 'Traditional Snacks',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753899424/SUGAR_GAVVALU_vbpbcy.png',
    variants: [
      { size: '250g', price: 69.00 },
      { size: '500g', price: 120.00 },
      { size: '1KG', price: 209.00 },
    ],
  },
  {
    id: 'ts3',
    name: 'Malida Muddalu',
    teluguName: 'మలిద ముద్దలు',
    description: 'Sweet balls made from wheat flour, jaggery, and ghee, a healthy and tasty traditional treat.',
    category: 'Traditional Snacks',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753899727/MALIDA_aiv32w.png',
    variants: [
      { size: '250g', price: 69.00 },
      { size: '500g', price: 120.00 },
      { size: '1KG', price: 199.00 },
    ],
  },
  {
    id: 'ts4',
    name: 'Sesame Laddu',
    teluguName: 'నువ్వుల లడ్డు',
    description: 'Nutritious and sweet laddus made from roasted sesame seeds and jaggery, packed with energy.',
    category: 'Traditional Snacks',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753900054/NUVV_mbgxbg.png',
    variants: [
      { size: '250g', price: 79.00 },
      { size: '500g', price: 140.00 },
      { size: '1KG', price: 229.00 },
    ],
  },
  {
    id: 'ts5',
    name: 'Ravva Laddu',
    teluguName: 'రవ్వ లడ్డు',
    description: 'Sweet semolina balls flavored with cardamom and ghee, a delightful and melt-in-your-mouth Indian dessert.',
    category: 'Traditional Snacks',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753900918/RAVVA_cnelrr.png',
    variants: [
      { size: '250g', price: 79.00 },
      { size: '500g', price: 140.00 },
      { size: '1KG', price: 209.00 },
    ],
  },
  {
    id: 'ts6',
    name: 'Pyalala Laddu',
    teluguName: 'ప్యాలాల లడ్డు',
    description: 'Sweet and crunchy laddus made from puffed rice and jaggery, a simple yet delicious snack.',
    category: 'Traditional Snacks',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753901123/PYA_hrjips.png',
    variants: [
      { size: '250g', price: 79.00 },
      { size: '500g', price: 140.00 },
      { size: '1KG', price: 209.00 },
    ],
  },

  // Other Items (fixed sizes)
  {
    id: 'oi1',
    name: 'Sarvapindi',
    teluguName: 'సర్వపిండి',
    description: 'Savory and crispy rice flour flatbread, a popular Telangana breakfast, a healthy and filling option.',
    category: 'Other Items',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753902881/SARVA_ckxjow.png',
    variants: [
      { size: 'Small', price: 25.00 },
      { size: 'Large', price: 49.00 },
    ],
  },
  {
    id: 'oi2',
    name: 'Baksalu',
    teluguName: 'బక్సలు',
    description: 'Sweet flatbreads, also known as Puran Poli, filled with a sweet lentil mixture, a delightful dessert.',
    category: 'Other Items',
    image: 'https://res.cloudinary.com/duhabjmtf/image/upload/v1753902878/BAK_tky25z.png',
    variants: [
      { size: 'Small', price: 19.00 },
      { size: 'Large', price: 25.00 },
    ],
  },
];

// Filter out "Order Based Foods"
const productsData = rawProductsData.filter(
  (product) => product.category !== 'Order Based Foods'
);

// Cart Context - Simple implementation using React Context
const CartContext = React.createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product, variant) => {
    const cartItem = {
      id: `${product.id}-${variant.size}`,
      productId: product.id,
      name: product.name,
      teluguName: product.teluguName,
      image: product.image,
      size: variant.size,
      price: variant.price,
      quantity: 1
    };

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === cartItem.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, cartItem];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getCartTotal,
      getCartItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart context
const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Product Card Component
const ProductCard = ({ product }) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isAdding, setIsAdding] = React.useState(false);
  const { addToCart, cartItems } = useCart();

  const currentVariant = product.variants[selectedVariantIndex];
  
  // Get quantity of current variant in cart
  const cartItemId = `${product.id}-${currentVariant.size}`;
  const cartItem = cartItems.find(item => item.id === cartItemId);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    setIsAdding(true);
    
    // Add to cart
    addToCart(product, currentVariant);
    
    // Show feedback for a moment
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full relative" style={{backgroundColor: '#FFD54F'}}>
      {/* Cart Indicator Badge */}
      {quantityInCart > 0 && (
        <div 
          className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
          style={{backgroundColor: '#D62828'}}
        >
          {quantityInCart}
        </div>
      )}
      
      {/* Image container */}
      <div
        className="relative w-full h-48 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/400x300/FFD700/000000?text=Image+Not+Found"; 
          }}
        />
        {/* Description overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <p className="text-white text-sm text-center leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Product details */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Product names */}
        <div className="text-center mb-3">
          <h3 className="text-lg font-bold mb-1" style={{color: '#D62828'}}>{product.name}</h3>
          <p className="text-base" style={{color: '#185E20', fontFamily: 'NTR, sans-serif'}}>{product.teluguName}</p>
        </div>

        {/* Variant selection */}
        {product.variants.length > 1 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1 justify-center">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVariantIndex(index);
                  }}
                  className={`py-1 px-3 rounded-full text-xs font-medium transition-all duration-200 border ${
                    selectedVariantIndex === index
                      ? 'bg-green-600 text-white border-green-600 shadow-sm'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-green-400'
                  }`}
                >
                  {variant.size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price and add to cart section */}
        <div className="mt-auto border-t border-gray-100 pt-3">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <span className="text-lg font-bold" style={{color: '#D62828'}}>
                ₹{currentVariant.price.toFixed(0)}
              </span>
              <span className="text-xs ml-1" style={{color: '#185E20'}}>
                / {currentVariant.size}
              </span>
            </div>
            <button 
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`font-medium py-2 px-4 rounded-lg text-sm transition-all duration-200 shadow-sm ${
                isAdding 
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white hover:shadow-md'
              }`}
            >
              {isAdding ? '✓ Added' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFB300'}}>
      <div className="container mx-auto px-4 py-8">
        {/* Page heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Products</h1>
          <p className="text-gray-600">Authentic traditional foods made with love</p>
        </div>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 rounded-full font-medium transition-all duration-300 text-sm ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Export the cart context and provider for use in other components
export { CartContext, useCart };