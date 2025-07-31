import React from 'react';
import { useCart } from './Products'; // Import the cart hook

export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartItemCount } = useCart();
  const [customerName, setCustomerName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [isNameValid, setIsNameValid] = React.useState(true);
  const [isAddressValid, setIsAddressValid] = React.useState(true);
  
  // Check if shipping is free (Siddipet)
  const isFreeShipping = city.toLowerCase().includes('siddipet');
  const shippingCharge = isFreeShipping ? 0 : 'Contact us for shipping charges';

  // Add fonts
  React.useEffect(() => {
    const fonts = [
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    ];
    
    fonts.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(itemId, newQuantity);
  };

  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };

  const validateForm = () => {
    const nameValid = customerName.trim().length > 0;
    const addressValid = address.trim().length > 0;
    setIsNameValid(nameValid);
    setIsAddressValid(addressValid);
    return nameValid && addressValid;
  };

  const generateWhatsAppMessage = () => {
    let message = `🛍️ *New Order Request*\n\n`;
    message += `👤 *Customer:* ${customerName}\n`;
    message += `📍 *Address:* ${address}\n`;
    if (city) message += `🏙️ *City:* ${city}\n\n`;
    
    message += `📦 *Items Ordered:*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.teluguName})\n`;
      message += `   Size: ${item.size}\n`;
      message += `   Qty: ${item.quantity} × ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `💰 *Order Summary:*\n`;
    message += `Subtotal: ${formatPrice(getCartTotal())}\n`;
    message += `Shipping: ${isFreeShipping ? 'FREE' : 'To be calculated'}\n`;
    message += `Total: ${isFreeShipping ? formatPrice(getCartTotal()) : 'To be confirmed'}\n\n`;
    message += `Please confirm this order. Thank you! 🙏`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    if (validateForm()) {
      const message = generateWhatsAppMessage();
      const whatsappURL = `https://wa.me/918074955963?text=${message}`;
      window.open(whatsappURL, '_blank');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50" style={{fontFamily: 'Inter, sans-serif'}}>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl text-gray-400">
                    shopping_cart
                  </span>
                </div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h1>
                <p className="text-gray-600">
                  Start adding some delicious traditional foods to your cart
                </p>
              </div>
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-sm">storefront</span>
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{fontFamily: 'Inter, sans-serif'}}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-web-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">
              {getCartItemCount()} {getCartItemCount() === 1 ? 'item' : 'items'} • Review your order
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-medium text-gray-900">Delivery Information</h2>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                        setIsNameValid(true);
                      }}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                        !isNameValid ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {!isNameValid && (
                      <p className="text-red-600 text-sm mt-1">Please enter your name</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Address *
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        setIsAddressValid(true);
                      }}
                      rows="3"
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition-colors ${
                        !isAddressValid ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="House number, street, area, landmark"
                    />
                    {!isAddressValid && (
                      <p className="text-red-600 text-sm mt-1">Please enter delivery address</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your city"
                    />
                    {city && (
                      <div className={`mt-2 p-3 rounded-lg text-sm ${
                        isFreeShipping ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-orange-50 text-orange-700 border border-orange-200'
                      }`}>
                        {isFreeShipping ? (
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">local_shipping</span>
                            Free shipping to Siddipet!
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">info</span>
                            Shipping charges will be confirmed for {city}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Cart Items */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-medium text-gray-900">Order Items</h2>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-xl shadow-sm"
                            onError={(e) => { 
                              e.target.onerror = null; 
                              e.target.src = "https://placehold.co/64x64/FFD700/000000?text=No+Image"; 
                            }}
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow min-w-0">
                          <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600 mb-2" style={{fontFamily: 'NTR, sans-serif'}}>
                            {item.teluguName}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>Size: {item.size}</span>
                            <span className="font-medium text-green-600">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                        </div>

                        {/* Quantity & Actions */}
                        <div className="flex flex-col items-end gap-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">remove</span>
                            </button>
                            
                            <span className="w-10 text-center font-medium">
                              {item.quantity}
                            </span>
                            
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                          </div>

                          <div className="text-right">
                            <div className="font-semibold text-gray-900 mb-1">
                              {formatPrice(item.price * item.quantity)}
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-600 hover:text-red-700 text-sm flex items-center gap-1 transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">delete</span>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Shopping */}
              <div>
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Continue Shopping
                </a>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 sticky top-6">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  {/* Subtotal */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal ({getCartItemCount()} items)</span>
                    <span className="font-medium">{formatPrice(getCartTotal())}</span>
                  </div>
                  
                  {/* Shipping */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping</span>
                    <span className={`font-medium ${isFreeShipping ? 'text-green-600' : 'text-orange-600'}`}>
                      {typeof shippingCharge === 'number' ? (shippingCharge === 0 ? 'FREE' : formatPrice(shippingCharge)) : 'TBD'}
                    </span>
                  </div>
                  
                  <hr className="border-gray-200" />
                  
                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-xl font-semibold text-gray-900">
                      {isFreeShipping ? formatPrice(getCartTotal()) : 'TBD'}
                    </span>
                  </div>
                  
                  {!isFreeShipping && (
                    <p className="text-sm text-orange-600 text-center">
                      Final total after shipping calculation
                    </p>
                  )}
                </div>
                
                <div className="p-6 pt-0">
                  <button 
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    Order Now on WhatsApp
                  </button>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      We'll confirm your order via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: inherit;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
          font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
        }
      `}</style>
    </div>
  );
};