import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrderSummary = ({ 
  subtotal, 
  appliedCoupons, 
  deliveryCharges, 
  onCheckout, 
  isCheckingOut,
  itemCount 
}) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(price);
  };

  const calculateCouponDiscount = () => {
    let totalDiscount = 0;
    appliedCoupons?.forEach(coupon => {
      if (coupon?.type === 'percentage') {
        totalDiscount += (subtotal * coupon?.discount) / 100;
      } else {
        totalDiscount += coupon?.discount;
      }
    });
    return totalDiscount;
  };

  const couponDiscount = calculateCouponDiscount();
  const finalTotal = subtotal - couponDiscount + deliveryCharges;
  const savings = couponDiscount;

  return (
    <div className="bg-card border border-border rounded-lg p-4 lg:p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
        <Icon name="Receipt" size={20} />
        Order Summary
      </h3>
      <div className="space-y-4">
        {/* Item Count */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Items ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </span>
          <span className="font-medium text-card-foreground">
            {formatPrice(subtotal)}
          </span>
        </div>

        {/* Applied Discounts */}
        {appliedCoupons?.length > 0 && (
          <div className="space-y-2">
            {appliedCoupons?.map((coupon) => {
              const discount = coupon?.type === 'percentage' 
                ? (subtotal * coupon?.discount) / 100 
                : coupon?.discount;
              
              return (
                <div key={coupon?.code} className="flex items-center justify-between text-sm">
                  <span className="text-success flex items-center gap-1">
                    <Icon name="Tag" size={14} />
                    {coupon?.code}
                  </span>
                  <span className="font-medium text-success">
                    -{formatPrice(discount)}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Delivery Charges */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-1">
            <Icon name="Truck" size={14} />
            Delivery Charges
          </span>
          <span className={`font-medium ${deliveryCharges === 0 ? 'text-success' : 'text-card-foreground'}`}>
            {deliveryCharges === 0 ? 'FREE' : formatPrice(deliveryCharges)}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-border"></div>

        {/* Total */}
        <div className="flex items-center justify-between text-lg font-semibold">
          <span className="text-card-foreground">Total Amount</span>
          <span className="text-primary">{formatPrice(finalTotal)}</span>
        </div>

        {/* Savings */}
        {savings > 0 && (
          <div className="bg-success/10 border border-success/20 rounded-lg p-3">
            <div className="flex items-center gap-2 text-success">
              <Icon name="Sparkles" size={16} />
              <span className="text-sm font-medium">
                You're saving {formatPrice(savings)} on this order!
              </span>
            </div>
          </div>
        )}

        {/* Delivery Info */}
        <div className="bg-muted/50 rounded-lg p-3 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Icon name="MapPin" size={14} className="text-muted-foreground" />
            <span className="text-muted-foreground">Deliver to:</span>
            <span className="font-medium text-card-foreground">Mumbai, 400001</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Clock" size={14} className="text-muted-foreground" />
            <span className="text-muted-foreground">Estimated delivery:</span>
            <span className="font-medium text-card-foreground">2-3 business days</span>
          </div>
        </div>

        {/* Checkout Button */}
        <Button
          onClick={onCheckout}
          loading={isCheckingOut}
          fullWidth
          size="lg"
          className="mt-6"
          iconName="CreditCard"
          iconPosition="left"
        >
          Proceed to Checkout
        </Button>

        {/* Security Info */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Icon name="Shield" size={14} />
          <span>100% Secure Payments</span>
        </div>

        {/* Payment Methods */}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground text-center">We accept:</p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-bold">VISA</span>
            </div>
            <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-bold">MC</span>
            </div>
            <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-bold">UPI</span>
            </div>
            <div className="w-8 h-5 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-bold">GPay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;