import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImages';
import Button from '@/components/ui/Button';

const EmptyCart = ({ wishlistItems, recommendedProducts }) => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(price);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12">
      {/* Empty Cart Illustration */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
          <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Your cart is empty
        </h2>
        <p className="text-muted-foreground mb-6">
          Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
        </p>
        <Button
          onClick={() => navigate('/home-landing')}
          size="lg"
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Continue Shopping
        </Button>
      </div>
      {/* Wishlist Items */}
      {wishlistItems && wishlistItems?.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Icon name="Heart" size={20} />
            Items in your Wishlist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems?.slice(0, 3)?.map((item) => (
              <div key={item?.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-medium transition-smooth">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item?.image}
                    alt={item?.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground line-clamp-2">
                    {item?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item?.brand}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-card-foreground">
                      {formatPrice(item?.price)}
                    </span>
                    {item?.originalPrice && item?.originalPrice > item?.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(item?.originalPrice)}
                      </span>
                    )}
                  </div>
                  <Button
                    fullWidth
                    size="sm"
                    iconName="ShoppingCart"
                    iconPosition="left"
                  >
                    Move to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Recommended Products */}
      {recommendedProducts && recommendedProducts?.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Icon name="Sparkles" size={20} />
            Recommended for You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts?.slice(0, 4)?.map((product) => (
              <div key={product?.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-medium transition-smooth">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 relative">
                  <Image
                    src={product?.image}
                    alt={product?.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  {product?.isNew && (
                    <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded">
                      New
                    </div>
                  )}
                  {product?.discount && (
                    <div className="absolute top-2 right-2 bg-error text-error-foreground text-xs font-medium px-2 py-1 rounded">
                      {product?.discount}% OFF
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-card-foreground line-clamp-2">
                    {product?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{product?.brand}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-card-foreground">
                      {formatPrice(product?.price)}
                    </span>
                    {product?.originalPrice && product?.originalPrice > product?.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product?.originalPrice)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={i < Math.floor(product?.rating) ? 'text-accent fill-current' : 'text-muted-foreground'}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({product?.reviews})
                    </span>
                  </div>
                  <Button
                    fullWidth
                    size="sm"
                    iconName="ShoppingCart"
                    iconPosition="left"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Truck" size={24} className="text-primary" />
          </div>
          <h4 className="font-medium text-foreground mb-2">Free Delivery</h4>
          <p className="text-sm text-muted-foreground">
            Free delivery on orders above ₹999
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="RotateCcw" size={24} className="text-primary" />
          </div>
          <h4 className="font-medium text-foreground mb-2">Easy Returns</h4>
          <p className="text-sm text-muted-foreground">
            30-day return policy for all items
          </p>
        </div>
        <div className="text-center p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Shield" size={24} className="text-primary" />
          </div>
          <h4 className="font-medium text-foreground mb-2">Secure Payments</h4>
          <p className="text-sm text-muted-foreground">
            100% secure payment processing
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;