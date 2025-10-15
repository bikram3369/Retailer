import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ChatWidget from '../../components/ui/ChatWidget';
import CartItem from './components/CartItem';
import CouponSection from './components/CouponSection';
import OrderSummary from './components/OrderSummary';
import EmptyCart from './components/EmptyCart';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [appliedCoupons, setAppliedCoupons] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Mock cart data
  const mockCartItems = [
  {
    id: 1,
    name: "Women\'s Ethnic Kurta Set with Palazzo",
    brand: "Fabindia",
    price: 2499,
    originalPrice: 3199,
    quantity: 1,
    stock: 8,
    image: "https://images.unsplash.com/photo-1669199525674-83c5e339abfe",
    imageAlt: "Beautiful ethnic kurta set in vibrant blue with intricate embroidery worn by Indian woman",
    selectedSize: "M",
    selectedColor: "Royal Blue",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: ["Royal Blue", "Emerald Green", "Maroon", "Black"],
    deliveryDate: "15th Oct 2025",
    freeDelivery: true
  },
  {
    id: 2,
    name: "Men\'s Casual Cotton Shirt - Slim Fit",
    brand: "Allen Solly",
    price: 1299,
    originalPrice: 1799,
    quantity: 2,
    stock: 15,
    image: "https://images.unsplash.com/photo-1730210730648-4c0618bb3e11",
    imageAlt: "Professional man wearing light blue cotton shirt in modern office setting",
    selectedSize: "L",
    selectedColor: "Light Blue",
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    availableColors: ["Light Blue", "White", "Navy Blue", "Pink"],
    deliveryDate: "14th Oct 2025",
    freeDelivery: true
  },
  {
    id: 3,
    name: "Designer Saree with Blouse Piece",
    brand: "Sabyasachi",
    price: 8999,
    originalPrice: 12999,
    quantity: 1,
    stock: 3,
    image: "https://images.unsplash.com/photo-1641626211359-cefe693e9e84",
    imageAlt: "Elegant Indian woman in traditional red silk saree with golden border and intricate patterns",
    selectedSize: "Free Size",
    selectedColor: "Deep Red",
    availableSizes: ["Free Size"],
    availableColors: ["Deep Red", "Royal Blue", "Emerald Green"],
    deliveryDate: "16th Oct 2025",
    freeDelivery: true
  }];


  // Mock wishlist items for empty cart
  const mockWishlistItems = [
  {
    id: 101,
    name: "Women\'s Denim Jacket - Vintage Style",
    brand: "Levi\'s",
    price: 3499,
    originalPrice: 4299,
    image: "https://images.unsplash.com/photo-1724323698851-01a3bf3fecdd",
    imageAlt: "Young woman wearing classic blue denim jacket in urban street setting"
  },
  {
    id: 102,
    name: "Men\'s Leather Formal Shoes",
    brand: "Clarks",
    price: 5999,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1515795725961-7f37ec40bcec",
    imageAlt: "Premium black leather formal shoes with polished finish on wooden surface"
  },
  {
    id: 103,
    name: "Women\'s Floral Summer Dress",
    brand: "Zara",
    price: 2799,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1618107847267-1ab7c07e085f",
    imageAlt: "Woman in colorful floral summer dress walking in garden setting"
  }];


  // Mock recommended products
  const mockRecommendedProducts = [
  {
    id: 201,
    name: "Casual Cotton T-Shirt",
    brand: "H&M",
    price: 799,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1634267624019-39ce15e5b057",
    imageAlt: "Person wearing comfortable white cotton t-shirt in casual setting",
    rating: 4.2,
    reviews: 156,
    isNew: true,
    discount: 20
  },
  {
    id: 202,
    name: "Women\'s Ankle Boots",
    brand: "Steve Madden",
    price: 4499,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1733184781426-7fed9c8bdc5b",
    imageAlt: "Stylish brown leather ankle boots with buckle detail on white background",
    rating: 4.5,
    reviews: 89,
    discount: 25
  },
  {
    id: 203,
    name: "Men\'s Casual Sneakers",
    brand: "Adidas",
    price: 3999,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1687511845973-b6225ffec7e3",
    imageAlt: "Modern white and black athletic sneakers on clean background",
    rating: 4.7,
    reviews: 234,
    discount: 20
  },
  {
    id: 204,
    name: "Women\'s Handbag - Leather",
    brand: "Michael Kors",
    price: 6999,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1601281866896-1576541e77a1",
    imageAlt: "Elegant black leather handbag with gold hardware on marble surface",
    rating: 4.3,
    reviews: 67,
    discount: 22
  }];


  useEffect(() => {
    // Simulate loading cart data
    const loadCartData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCartItems(mockCartItems);
      setIsLoading(false);
    };

    loadCartData();
  }, []);

  const calculateSubtotal = () => {
    return cartItems?.reduce((total, item) => total + item?.price * item?.quantity, 0);
  };

  const calculateDeliveryCharges = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 999 ? 0 : 99; // Free delivery above ₹999
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((items) =>
    items?.map((item) =>
    item?.id === itemId ? { ...item, quantity: newQuantity } : item
    )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((items) => items?.filter((item) => item?.id !== itemId));
  };

  const handleSaveForLater = (itemId) => {
    // Move item to wishlist and remove from cart
    const item = cartItems?.find((item) => item?.id === itemId);
    if (item) {
      handleRemoveItem(itemId);
      // In a real app, this would add to wishlist
      console.log('Item saved for later:', item);
    }
  };

  const handleUpdateVariant = (itemId, variantType, value) => {
    setCartItems((items) =>
    items?.map((item) =>
    item?.id === itemId ?
    { ...item, [`selected${variantType?.charAt(0)?.toUpperCase() + variantType?.slice(1)}`]: value } :
    item
    )
    );
  };

  const handleApplyCoupon = (coupon) => {
    setAppliedCoupons((prev) => [...prev, coupon]);
  };

  const handleRemoveCoupon = (couponCode) => {
    setAppliedCoupons((prev) => prev?.filter((coupon) => coupon?.code !== couponCode));
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);

    // Simulate checkout process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In a real app, this would navigate to checkout page
    console.log('Proceeding to checkout with items:', cartItems);
    console.log('Applied coupons:', appliedCoupons);

    setIsCheckingOut(false);

    // For demo purposes, show success message
    alert('Redirecting to secure checkout...');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-48 mb-6"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {[1, 2, 3]?.map((i) =>
                  <div key={i} className="bg-card border border-border rounded-lg p-6">
                      <div className="flex gap-4">
                        <div className="w-32 h-32 bg-muted rounded-lg"></div>
                        <div className="flex-1 space-y-3">
                          <div className="h-4 bg-muted rounded w-3/4"></div>
                          <div className="h-3 bg-muted rounded w-1/2"></div>
                          <div className="h-4 bg-muted rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="h-6 bg-muted rounded w-32 mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-8 bg-muted rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChatWidget />
      </div>);

  }

  if (cartItems?.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <EmptyCart
            wishlistItems={mockWishlistItems}
            recommendedProducts={mockRecommendedProducts} />

        </div>
        <ChatWidget />
      </div>);

  }

  const subtotal = calculateSubtotal();
  const deliveryCharges = calculateDeliveryCharges();
  const itemCount = cartItems?.reduce((total, item) => total + item?.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 lg:py-8">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Shopping Cart
              </h1>
              <p className="text-muted-foreground mt-1">
                {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            
            <Button
              variant="outline"
              onClick={() => navigate('/home-landing')}
              iconName="ArrowLeft"
              iconPosition="left"
              className="hidden lg:flex">

              Continue Shopping
            </Button>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items & Coupon Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems?.map((item) =>
                <CartItem
                  key={item?.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                  onSaveForLater={handleSaveForLater}
                  onUpdateVariant={handleUpdateVariant} />

                )}
              </div>

              {/* Coupon Section */}
              <CouponSection
                appliedCoupons={appliedCoupons}
                onApplyCoupon={handleApplyCoupon}
                onRemoveCoupon={handleRemoveCoupon} />


              {/* Mobile Continue Shopping */}
              <div className="lg:hidden">
                <Button
                  variant="outline"
                  onClick={() => navigate('/home-landing')}
                  iconName="ArrowLeft"
                  iconPosition="left"
                  fullWidth>

                  Continue Shopping
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <OrderSummary
                subtotal={subtotal}
                appliedCoupons={appliedCoupons}
                deliveryCharges={deliveryCharges}
                onCheckout={handleCheckout}
                isCheckingOut={isCheckingOut}
                itemCount={itemCount} />

            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-border">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" size={20} className="text-success" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Secure Checkout</h4>
                <p className="text-sm text-muted-foreground">SSL encrypted payments</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Truck" size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Fast Delivery</h4>
                <p className="text-sm text-muted-foreground">2-3 business days</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="RotateCcw" size={20} className="text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Easy Returns</h4>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatWidget />
    </div>);

};

export default ShoppingCart;