import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useCart } from './Products';

/**
 * Cart Component - Professional shopping cart with checkout functionality
 * Features: Item management, delivery info, WhatsApp integration, responsive design
 */
export const Cart = () => {
  // ==================== HOOKS & STATE ====================
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    getCartItemCount
  } = useCart();

  // Form state
  const [formData, setFormData] = useState({
    customerName: '',
    address: '',
    city: ''
  });

  // Validation state - simplified
  const [validationErrors, setValidationErrors] = useState({});
  const [showValidation, setShowValidation] = useState(false);

  // Confirmation dialog state
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    onConfirm: null,
    onCancel: null,
    type: 'warning'
  });

  // ==================== COMPUTED VALUES ====================
  const isFreeShipping = useMemo(() => 
    formData.city.toLowerCase().includes('siddipet'), 
    [formData.city]
  );
  
  const shippingCharge = useMemo(() => 
    isFreeShipping ? 0 : 'Contact us for shipping charges', 
    [isFreeShipping]
  );

  // ==================== EFFECTS ====================
  useEffect(() => {
    const loadGoogleFonts = () => {
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
    };
    
    loadGoogleFonts();
  }, []);

  // ==================== UTILITY FUNCTIONS ====================
  const formatPrice = useCallback((price) => `₹${price.toFixed(2)}`, []);

  // ==================== FORM HANDLERS ====================
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear specific field error
    setValidationErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
    
    // Hide validation message if no errors remain
    setShowValidation(prev => prev && Object.keys(validationErrors).length > 1);
  }, [validationErrors]);

  const validateForm = useCallback(() => {
    const errors = {};
    
    if (!formData.customerName.trim()) {
      errors.customerName = 'Please enter your name';
    }
    
    if (!formData.address.trim()) {
      errors.address = 'Please enter delivery address';
    }
    
    const hasErrors = Object.keys(errors).length > 0;
    setValidationErrors(errors);
    setShowValidation(hasErrors);
    
    return !hasErrors;
  }, [formData.customerName, formData.address]);

  // ==================== CONFIRMATION DIALOG HELPERS ====================
  const showConfirmDialog = useCallback((title, message, onConfirm, type = 'warning') => {
    setConfirmDialog({
      isOpen: true,
      title,
      message,
      onConfirm,
      onCancel: () => setConfirmDialog(prev => ({ ...prev, isOpen: false })),
      type
    });
  }, []);

  const closeConfirmDialog = useCallback(() => {
    setConfirmDialog(prev => ({ ...prev, isOpen: false }));
  }, []);

  // ==================== CART HANDLERS ====================
  const handleQuantityChange = useCallback((itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(itemId, newQuantity);
  }, [updateQuantity]);

  const handleEmptyCart = useCallback(() => {
    showConfirmDialog(
      'Empty Cart',
      'Are you sure you want to remove all items from your cart? This action cannot be undone.',
      () => {
        cartItems.forEach(item => removeFromCart(item.id));
        closeConfirmDialog();
      },
      'warning'
    );
  }, [cartItems, removeFromCart, showConfirmDialog, closeConfirmDialog]);

  const handleRemoveItem = useCallback((item) => {
    showConfirmDialog(
      'Remove Item',
      `Are you sure you want to remove "${item.name}" from your cart?`,
      () => {
        removeFromCart(item.id);
        closeConfirmDialog();
      },
      'warning'
    );
  }, [removeFromCart, showConfirmDialog, closeConfirmDialog]);

  // ==================== WHATSAPP INTEGRATION ====================
  const generateWhatsAppMessage = useCallback(() => {
    let message = `🛍️ *New Order Request*\n\n`;
    message += `👤 *Customer:* ${formData.customerName}\n`;
    message += `📍 *Address:* ${formData.address}\n`;
    if (formData.city) message += `🏙️ *City:* ${formData.city}\n\n`;
    
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
  }, [formData, cartItems, getCartTotal, isFreeShipping, formatPrice]);

  const handleWhatsAppOrder = useCallback(() => {
    if (validateForm()) {
      showConfirmDialog(
        'Confirm Order',
        'Your order details will be sent to WhatsApp for confirmation. Proceed with the order?',
        () => {
          const message = generateWhatsAppMessage();
          const whatsappURL = `https://wa.me/918074955963?text=${message}`;
          window.open(whatsappURL, '_blank');
          closeConfirmDialog();
        },
        'success'
      );
    } else {
      const errorFields = Object.keys(validationErrors);
      showConfirmDialog(
        'Missing Information',
        `Please fill in the following required fields:\n• ${errorFields.map(field => 
          field === 'customerName' ? 'Name' : 'Address'
        ).join('\n• ')}`,
        () => closeConfirmDialog(),
        'error'
      );
    }
  }, [validateForm, validationErrors, showConfirmDialog, closeConfirmDialog, generateWhatsAppMessage]);

  // ==================== MEMOIZED COMPONENTS ====================
  const ConfirmationDialog = useMemo(() => {
    if (!confirmDialog.isOpen) return null;

    const getIconAndColors = () => {
      switch (confirmDialog.type) {
        case 'success':
          return {
            icon: 'check_circle',
            iconColor: '#185E20',
            bgColor: 'rgba(24, 94, 32, 0.1)'
          };
        case 'error':
          return {
            icon: 'error',
            iconColor: '#D62828',
            bgColor: 'rgba(214, 40, 40, 0.1)'
          };
        default:
          return {
            icon: 'warning',
            iconColor: '#FFB300',
            bgColor: 'rgba(255, 179, 0, 0.1)'
          };
      }
    };

    const { icon, iconColor, bgColor } = getIconAndColors();

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={confirmDialog.onCancel}
        />
        
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all duration-300 w-full max-w-md">
            <div className="bg-white px-6 pt-6 pb-4">
              <div className="flex items-start">
                <div 
                  className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: bgColor }}
                >
                  <span 
                    className="material-symbols-outlined text-2xl"
                    style={{ color: iconColor }}
                  >
                    {icon}
                  </span>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex-1">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-2">
                    {confirmDialog.title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                      {confirmDialog.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all duration-200 sm:w-auto"
                onClick={confirmDialog.onCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 sm:w-auto hover:opacity-90"
                style={{ backgroundColor: '#185E20' }}
                onClick={confirmDialog.onConfirm}
              >
                {confirmDialog.type === 'success' ? 'Proceed' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }, [confirmDialog]);

  const EmptyCartView = useMemo(() => (
    <div className="min-h-screen" style={{ backgroundColor: '#FFB300', fontFamily: 'Inter, sans-serif' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'rgba(255, 179, 0, 0.1)' }}
              >
                <span 
                  className="material-symbols-outlined text-3xl"
                  style={{ color: '#FFB300' }}
                >
                  shopping_cart
                </span>
              </div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h1>
              <p className="text-gray-600">
                Start adding some delicious traditional foods to your cart
              </p>
            </div>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#185E20' }}
            >
              <span className="material-symbols-outlined text-sm">storefront</span>
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </div>
  ), []);

  const CartHeader = useMemo(() => (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold mb-2" style={{ color: '#D62828' }}>Shopping Cart</h1>
      <p className="text-gray-700 mb-4">
        {getCartItemCount()} {getCartItemCount() === 1 ? 'item' : 'items'} • Review your order
      </p>
      {cartItems.length > 0 && (
        <button
          onClick={handleEmptyCart}
          className="inline-flex items-center gap-2 font-medium transition-all duration-200 border-2 px-4 py-2 rounded-xl hover:opacity-90"
          style={{ 
            color: '#D62828', 
            borderColor: '#D62828',
            backgroundColor: 'rgba(214, 40, 40, 0.1)'
          }}
        >
          <span className="material-symbols-outlined text-sm">delete_sweep</span>
          Empty Cart
        </button>
      )}
    </div>
  ), [cartItems.length, getCartItemCount, handleEmptyCart]);

  // Memoized form component to prevent re-renders
  const DeliveryInfoForm = useMemo(() => (
    <div className="bg-white rounded-2xl shadow-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <span 
            className="material-symbols-outlined text-xl"
            style={{ color: '#185E20' }}
          >
            local_shipping
          </span>
          Delivery Information
        </h2>
      </div>
      <div className="p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-200 ${
              validationErrors.customerName
                ? 'border-red-300 bg-red-50 focus:border-red-400' 
                : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
            }`}
            placeholder="Enter your full name"
          />
          {validationErrors.customerName && (
            <p className="text-sm mt-1 flex items-center gap-1" style={{ color: '#D62828' }}>
              <span className="material-symbols-outlined text-sm">error</span>
              {validationErrors.customerName}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Address *
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows="3"
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none resize-none transition-all duration-200 ${
              validationErrors.address
                ? 'border-red-300 bg-red-50 focus:border-red-400' 
                : 'border-gray-200 hover:border-gray-300 focus:border-blue-400'
            }`}
            placeholder="House number, street, area, landmark"
          />
          {validationErrors.address && (
            <p className="text-sm mt-1 flex items-center gap-1" style={{ color: '#D62828' }}>
              <span className="material-symbols-outlined text-sm">error</span>
              {validationErrors.address}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 transition-all duration-200 hover:border-gray-300"
            placeholder="Enter your city"
          />
          {formData.city && (
            <div 
              className="mt-3 p-3 rounded-lg text-sm transition-all duration-200 border-2"
              style={{
                backgroundColor: isFreeShipping ? 'rgba(24, 94, 32, 0.1)' : 'rgba(255, 179, 0, 0.1)',
                borderColor: isFreeShipping ? '#185E20' : '#FFB300',
                color: isFreeShipping ? '#185E20' : '#FFB300'
              }}
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  {isFreeShipping ? 'local_shipping' : 'info'}
                </span>
                {isFreeShipping 
                  ? `Free shipping to ${formData.city}!` 
                  : `Shipping charges will be confirmed for ${formData.city}`
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ), [formData, handleInputChange, validationErrors, isFreeShipping]);

  const CartItemCard = useCallback(({ item }) => (
    <div className="p-6 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-xl shadow-sm border-2 border-gray-200"
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = "https://placehold.co/64x64/FFB300/000000?text=No+Image"; 
            }}
          />
        </div>

        <div className="flex-grow min-w-0">
          <h3 className="font-medium mb-1" style={{ color: '#D62828' }}>{item.name}</h3>
          <p className="text-sm mb-2" style={{ color: '#185E20', fontFamily: 'NTR, sans-serif' }}>
            {item.teluguName}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">straighten</span>
              Size: {item.size}
            </span>
            <span className="font-medium" style={{ color: '#185E20' }}>
              {formatPrice(item.price)}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div 
            className="flex items-center gap-2 rounded-lg p-1"
            style={{ backgroundColor: 'rgba(255, 179, 0, 0.1)' }}
          >
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              className="w-8 h-8 rounded-md bg-white hover:bg-gray-100 flex items-center justify-center transition-colors duration-200 shadow-sm border"
              disabled={item.quantity <= 1}
            >
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            
            <span className="w-10 text-center font-medium px-2">
              {item.quantity}
            </span>
            
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              className="w-8 h-8 rounded-md bg-white hover:bg-gray-100 flex items-center justify-center transition-colors duration-200 shadow-sm border"
            >
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>

          <div className="text-right">
            <div className="font-semibold text-gray-900 mb-2">
              {formatPrice(item.price * item.quantity)}
            </div>
            <button
              onClick={() => handleRemoveItem(item)}
              className="text-sm flex items-center gap-1 transition-colors duration-200 px-2 py-1 rounded hover:opacity-80"
              style={{ 
                color: '#D62828',
                backgroundColor: 'rgba(214, 40, 40, 0.1)'
              }}
            >
              <span className="material-symbols-outlined text-sm">delete</span>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  ), [formatPrice, handleQuantityChange, handleRemoveItem]);

  const OrderSummary = useMemo(() => (
    <div className="bg-white rounded-2xl shadow-lg sticky top-6">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <span 
            className="material-symbols-outlined text-xl"
            style={{ color: '#185E20' }}
          >
            receipt
          </span>
          Order Summary
        </h2>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal ({getCartItemCount()} items)</span>
          <span className="font-medium">{formatPrice(getCartTotal())}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span>
          <span 
            className="font-medium"
            style={{ color: isFreeShipping ? '#185E20' : '#FFB300' }}
          >
            {typeof shippingCharge === 'number' ? (shippingCharge === 0 ? 'FREE' : formatPrice(shippingCharge)) : 'TBD'}
          </span>
        </div>
        
        <hr className="border-gray-200" />
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">Total</span>
          <span className="text-xl font-semibold text-gray-900">
            {isFreeShipping ? formatPrice(getCartTotal()) : 'TBD'}
          </span>
        </div>
        
        {!isFreeShipping && (
          <p 
            className="text-sm text-center p-2 rounded-lg"
            style={{ 
              color: '#FFB300',
              backgroundColor: 'rgba(255, 179, 0, 0.1)'
            }}
          >
            Final total after shipping calculation
          </p>
        )}
      </div>
      
      <div className="p-6 pt-0">
        {showValidation && Object.keys(validationErrors).length > 0 && (
          <div 
            className="mb-4 p-3 rounded-lg border-2"
            style={{
              backgroundColor: 'rgba(214, 40, 40, 0.1)',
              borderColor: '#D62828'
            }}
          >
            <div className="flex items-start gap-2">
              <span 
                className="material-symbols-outlined text-sm mt-0.5"
                style={{ color: '#D62828' }}
              >
                error
              </span>
              <div>
                <p className="font-medium text-sm mb-1" style={{ color: '#D62828' }}>
                  Please complete required fields:
                </p>
                <ul className="text-sm space-y-1" style={{ color: '#D62828' }}>
                  {validationErrors.customerName && (
                    <li className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D62828' }}></span>
                      Full Name is required
                    </li>
                  )}
                  {validationErrors.address && (
                    <li className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D62828' }}></span>
                      Delivery Address is required
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        <button 
          onClick={handleWhatsAppOrder}
          className="w-full text-white font-medium py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transform hover:scale-[1.02]"
          style={{ backgroundColor: '#185E20' }}
        >
          <span className="material-symbols-outlined">chat</span>
          Order Now on WhatsApp
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
            <span 
              className="material-symbols-outlined text-sm"
              style={{ color: '#185E20' }}
            >
              verified
            </span>
            We'll confirm your order via WhatsApp
          </p>
        </div>
      </div>
    </div>
  ), [getCartItemCount, getCartTotal, formatPrice, isFreeShipping, shippingCharge, showValidation, validationErrors, handleWhatsAppOrder]);

  // ==================== MAIN RENDER ====================
  if (cartItems.length === 0) {
    return EmptyCartView;
  }

  return (
    <>
      <div 
        className="min-h-screen"
        style={{ backgroundColor: '#FFB300', fontFamily: 'Inter, sans-serif' }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            
            {CartHeader}

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2 space-y-6">
                {DeliveryInfoForm}

                <div className="bg-white rounded-2xl shadow-lg">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                      <span 
                        className="material-symbols-outlined text-xl"
                        style={{ color: '#185E20' }}
                      >
                        shopping_bag
                      </span>
                      Order Items
                    </h2>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <CartItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button
                    onClick={() => window.history.back()}
                    className="inline-flex items-center gap-2 font-medium transition-all duration-200 px-4 py-2 rounded-lg hover:opacity-80"
                    style={{ 
                      color: '#185E20',
                      backgroundColor: 'rgba(24, 94, 32, 0.1)'
                    }}
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Continue Shopping
                  </button>
                  
                  <div className="text-sm text-gray-600 flex items-center gap-1">
                    <span 
                      className="material-symbols-outlined text-sm"
                      style={{ color: '#185E20' }}
                    >
                      shield
                    </span>
                    Secure Checkout
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                {OrderSummary}
              </div>
            </div>
          </div>
        </div>

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
          
          html {
            scroll-behavior: smooth;
          }
          
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }

          /* Mobile responsive improvements */
          @media (max-width: 640px) {
            .container {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            
            .grid {
              gap: 1rem;
            }
            
            .rounded-2xl {
              border-radius: 1rem;
            }
            
            .p-6 {
              padding: 1rem;
            }
            
            .px-6 {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            
            .py-4 {
              padding-top: 0.75rem;
              padding-bottom: 0.75rem;
            }
          }
        `}</style>
      </div>

      {ConfirmationDialog}
    </>
  );
};