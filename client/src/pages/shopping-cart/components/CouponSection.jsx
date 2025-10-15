import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CouponSection = ({ appliedCoupons, onApplyCoupon, onRemoveCoupon }) => {
  const [couponCode, setCouponCode] = useState('');
  const [isApplying, setIsApplying] = useState(false);
  const [error, setError] = useState('');

  const availableCoupons = [
    {
      code: 'FASHION20',
      title: '20% Off on Fashion',
      description: 'Get 20% off on all fashion items',
      discount: 20,
      type: 'percentage',
      minAmount: 1999
    },
    {
      code: 'SAVE500',
      title: 'Flat ₹500 Off',
      description: 'Save ₹500 on orders above ₹2999',
      discount: 500,
      type: 'fixed',
      minAmount: 2999
    },
    {
      code: 'FIRST100',
      title: 'First Order Discount',
      description: 'Flat ₹100 off on your first order',
      discount: 100,
      type: 'fixed',
      minAmount: 999
    }
  ];

  const handleApplyCoupon = async () => {
    if (!couponCode?.trim()) return;

    setIsApplying(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const coupon = availableCoupons?.find(c => 
      c?.code?.toLowerCase() === couponCode?.toLowerCase()
    );

    if (coupon) {
      const isAlreadyApplied = appliedCoupons?.some(c => c?.code === coupon?.code);
      if (isAlreadyApplied) {
        setError('This coupon is already applied');
      } else {
        onApplyCoupon(coupon);
        setCouponCode('');
      }
    } else {
      setError('Invalid coupon code');
    }

    setIsApplying(false);
  };

  const formatDiscount = (coupon) => {
    if (coupon?.type === 'percentage') {
      return `${coupon?.discount}% OFF`;
    }
    return `₹${coupon?.discount} OFF`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 lg:p-6">
      <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
        <Icon name="Tag" size={20} />
        Apply Coupon
      </h3>
      {/* Coupon Input */}
      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => {
              setCouponCode(e?.target?.value?.toUpperCase());
              setError('');
            }}
            error={error}
            className="flex-1"
          />
          <Button
            onClick={handleApplyCoupon}
            loading={isApplying}
            disabled={!couponCode?.trim()}
            className="px-6"
          >
            Apply
          </Button>
        </div>

        {/* Applied Coupons */}
        {appliedCoupons?.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-card-foreground">Applied Coupons:</h4>
            {appliedCoupons?.map((coupon) => (
              <div
                key={coupon?.code}
                className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-success-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-success text-sm">{coupon?.code}</p>
                    <p className="text-xs text-success/80">{coupon?.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-success">
                    {formatDiscount(coupon)}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveCoupon(coupon?.code)}
                    iconName="X"
                    className="h-6 w-6 p-0 text-success hover:text-success/80"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Available Coupons */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-card-foreground">Available Offers:</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-thin">
            {availableCoupons?.filter(coupon => !appliedCoupons?.some(applied => applied?.code === coupon?.code))?.map((coupon) => (
                <div
                  key={coupon?.code}
                  className="flex items-center justify-between p-3 bg-muted/50 border border-border rounded-lg hover:bg-muted transition-smooth cursor-pointer"
                  onClick={() => {
                    setCouponCode(coupon?.code);
                    setError('');
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Percent" size={16} className="text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground text-sm">{coupon?.code}</p>
                      <p className="text-xs text-muted-foreground">{coupon?.description}</p>
                      <p className="text-xs text-muted-foreground">
                        Min order: ₹{coupon?.minAmount?.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-accent">
                      {formatDiscount(coupon)}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponSection;