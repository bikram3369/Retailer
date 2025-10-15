import React, { useState } from 'react';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImages';
import Button from '@/components/ui/Button';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem, onSaveForLater, onUpdateVariant }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity) => {
    if (newQuantity < 1 || newQuantity > item?.stock) return;
    
    setIsUpdating(true);
    await new Promise(resolve => setTimeout(resolve, 300)); // Simulate API call
    onUpdateQuantity(item?.id, newQuantity);
    setIsUpdating(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(price);
  };

  const calculateDiscount = () => {
    if (item?.originalPrice && item?.price < item?.originalPrice) {
      const discount = ((item?.originalPrice - item?.price) / item?.originalPrice) * 100;
      return Math.round(discount);
    }
    return 0;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 lg:p-6 transition-smooth hover:shadow-medium">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="w-full lg:w-32 h-40 lg:h-32 bg-muted rounded-lg overflow-hidden">
            <Image
              src={item?.image}
              alt={item?.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-3">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
            <div className="space-y-1">
              <h3 className="font-medium text-card-foreground line-clamp-2">
                {item?.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                Brand: {item?.brand}
              </p>
            </div>
            
            {/* Remove Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveItem(item?.id)}
              iconName="X"
              className="self-start lg:self-center"
            >
              Remove
            </Button>
          </div>

          {/* Variants */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Size:</span>
              <select
                value={item?.selectedSize}
                onChange={(e) => onUpdateVariant(item?.id, 'size', e?.target?.value)}
                className="border border-border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {item?.availableSizes?.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Color:</span>
              <select
                value={item?.selectedColor}
                onChange={(e) => onUpdateVariant(item?.id, 'color', e?.target?.value)}
                className="border border-border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {item?.availableColors?.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Price and Quantity */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-card-foreground">
                  {formatPrice(item?.price)}
                </span>
                {item?.originalPrice && item?.originalPrice > item?.price && (
                  <>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(item?.originalPrice)}
                    </span>
                    <span className="text-sm text-success font-medium">
                      {calculateDiscount()}% off
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Qty:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(item?.quantity - 1)}
                    disabled={item?.quantity <= 1 || isUpdating}
                    iconName="Minus"
                    className="h-8 w-8 p-0"
                  />
                  <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                    {isUpdating ? '...' : item?.quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(item?.quantity + 1)}
                    disabled={item?.quantity >= item?.stock || isUpdating}
                    iconName="Plus"
                    className="h-8 w-8 p-0"
                  />
                </div>
              </div>

              {/* Save for Later */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSaveForLater(item?.id)}
                iconName="Heart"
                iconPosition="left"
              >
                Save for Later
              </Button>
            </div>
          </div>

          {/* Stock Status */}
          {item?.stock <= 5 && (
            <div className="flex items-center gap-2 text-sm text-warning">
              <Icon name="AlertTriangle" size={16} />
              <span>Only {item?.stock} left in stock</span>
            </div>
          )}

          {/* Delivery Info */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Truck" size={16} />
            <span>Delivery by {item?.deliveryDate}</span>
            {item?.freeDelivery && (
              <span className="text-success font-medium">• Free Delivery</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;