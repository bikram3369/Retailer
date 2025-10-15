import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const WalletTab = () => {
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [addAmount, setAddAmount] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const walletData = {
    balance: 2450,
    loyaltyPoints: 1250,
    pointsValue: 125, // 1 point = ₹0.10
    totalEarned: 15680,
    totalSpent: 13230
  };

  const transactions = [
    {
      id: 1,
      type: 'credit',
      amount: 500,
      description: 'Cashback from order ORD-2025-001234',
      date: '12/10/2025',
      time: '14:30',
      orderId: 'ORD-2025-001234',
      status: 'completed'
    },
    {
      id: 2,
      type: 'debit',
      amount: 299,
      description: 'Payment for order ORD-2025-001235',
      date: '08/10/2025',
      time: '16:45',
      orderId: 'ORD-2025-001235',
      status: 'completed'
    },
    {
      id: 3,
      type: 'credit',
      amount: 1000,
      description: 'Wallet top-up via UPI',
      date: '05/10/2025',
      time: '10:15',
      paymentMethod: 'UPI',
      status: 'completed'
    },
    {
      id: 4,
      type: 'credit',
      amount: 150,
      description: 'Referral bonus - Friend joined',
      date: '03/10/2025',
      time: '09:20',
      referralCode: 'REF123',
      status: 'completed'
    },
    {
      id: 5,
      type: 'debit',
      amount: 1299,
      description: 'Payment for order ORD-2025-001236',
      date: '01/10/2025',
      time: '18:30',
      orderId: 'ORD-2025-001236',
      status: 'completed'
    }
  ];

  const loyaltyHistory = [
    {
      id: 1,
      type: 'earned',
      points: 230,
      description: 'Points earned from order ORD-2025-001234',
      date: '12/10/2025',
      orderId: 'ORD-2025-001234'
    },
    {
      id: 2,
      type: 'redeemed',
      points: 500,
      description: 'Points redeemed for ₹50 discount',
      date: '08/10/2025',
      orderId: 'ORD-2025-001235'
    },
    {
      id: 3,
      type: 'earned',
      points: 300,
      description: 'Bonus points for app review',
      date: '05/10/2025'
    },
    {
      id: 4,
      type: 'earned',
      points: 180,
      description: 'Points earned from order ORD-2025-001237',
      date: '28/09/2025',
      orderId: 'ORD-2025-001237'
    }
  ];

  const quickAddAmounts = [500, 1000, 2000, 5000];
  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: 'Smartphone' },
    { id: 'card', name: 'Credit/Debit Card', icon: 'CreditCard' },
    { id: 'netbanking', name: 'Net Banking', icon: 'Building' },
    { id: 'wallet', name: 'Other Wallets', icon: 'Wallet' }
  ];

  const handleAddMoney = () => {
    if (addAmount && selectedPaymentMethod) {
      // Handle add money logic
      console.log('Adding money:', addAmount, selectedPaymentMethod);
      setShowAddMoney(false);
      setAddAmount('');
      setSelectedPaymentMethod('');
    }
  };

  const handleRedeemPoints = () => {
    // Handle points redemption
    console.log('Redeeming points');
  };

  return (
    <div className="space-y-6">
      {/* Wallet Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Current Balance */}
        <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <Icon name="Wallet" size={24} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAddMoney(true)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Icon name="Plus" size={16} />
            </Button>
          </div>
          <div>
            <p className="text-primary-foreground/80 text-sm">Wallet Balance</p>
            <p className="text-2xl font-bold">₹{walletData?.balance?.toLocaleString('en-IN')}</p>
          </div>
        </div>

        {/* Loyalty Points */}
        <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <Icon name="Star" size={24} />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRedeemPoints}
              className="text-accent-foreground hover:bg-accent-foreground/20"
            >
              <Icon name="Gift" size={16} />
            </Button>
          </div>
          <div>
            <p className="text-accent-foreground/80 text-sm">Loyalty Points</p>
            <p className="text-2xl font-bold">{walletData?.loyaltyPoints?.toLocaleString('en-IN')}</p>
            <p className="text-accent-foreground/80 text-xs">Worth ₹{walletData?.pointsValue}</p>
          </div>
        </div>

        {/* Total Earned */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Icon name="TrendingUp" size={24} className="text-success" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Earned</p>
            <p className="text-2xl font-bold text-card-foreground">₹{walletData?.totalEarned?.toLocaleString('en-IN')}</p>
          </div>
        </div>

        {/* Total Spent */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Icon name="TrendingDown" size={24} className="text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Spent</p>
            <p className="text-2xl font-bold text-card-foreground">₹{walletData?.totalSpent?.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            variant="outline"
            className="h-20 flex-col space-y-2"
            onClick={() => setShowAddMoney(true)}
          >
            <Icon name="Plus" size={20} />
            <span className="text-sm">Add Money</span>
          </Button>
          
          <Button
            variant="outline"
            className="h-20 flex-col space-y-2"
            onClick={handleRedeemPoints}
          >
            <Icon name="Gift" size={20} />
            <span className="text-sm">Redeem Points</span>
          </Button>
          
          <Button
            variant="outline"
            className="h-20 flex-col space-y-2"
          >
            <Icon name="Send" size={20} />
            <span className="text-sm">Send Money</span>
          </Button>
          
          <Button
            variant="outline"
            className="h-20 flex-col space-y-2"
          >
            <Icon name="Download" size={20} />
            <span className="text-sm">Download Statement</span>
          </Button>
        </div>
      </div>
      {/* Transactions and Loyalty Points Tabs */}
      <div className="bg-card rounded-lg border border-border">
        <div className="border-b border-border">
          <nav className="flex space-x-8 px-6">
            <button className="py-4 px-1 border-b-2 border-primary text-primary font-medium text-sm">
              Transaction History
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-medium text-sm">
              Loyalty Points History
            </button>
          </nav>
        </div>

        {/* Transaction History */}
        <div className="p-6">
          <div className="space-y-4">
            {transactions?.map((transaction) => (
              <div key={transaction?.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction?.type === 'credit' ?'bg-success/10 text-success' :'bg-error/10 text-error'
                  }`}>
                    <Icon 
                      name={transaction?.type === 'credit' ? 'ArrowDownLeft' : 'ArrowUpRight'} 
                      size={20} 
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{transaction?.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{transaction?.date} at {transaction?.time}</span>
                      {transaction?.orderId && (
                        <span>Order: {transaction?.orderId}</span>
                      )}
                      {transaction?.paymentMethod && (
                        <span>via {transaction?.paymentMethod}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction?.type === 'credit' ? 'text-success' : 'text-error'
                  }`}>
                    {transaction?.type === 'credit' ? '+' : '-'}₹{transaction?.amount?.toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-muted-foreground capitalize">{transaction?.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Add Money Modal */}
      {showAddMoney && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-card rounded-lg shadow-large">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-card-foreground">Add Money to Wallet</h2>
                <button
                  onClick={() => setShowAddMoney(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-smooth"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Amount Input */}
                <div>
                  <Input
                    label="Enter Amount"
                    type="number"
                    value={addAmount}
                    onChange={(e) => setAddAmount(e?.target?.value)}
                    placeholder="₹ 0"
                    required
                  />
                  
                  {/* Quick Amount Buttons */}
                  <div className="grid grid-cols-4 gap-2 mt-3">
                    {quickAddAmounts?.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setAddAmount(amount?.toString())}
                        className="px-3 py-2 text-sm border border-border rounded-lg hover:bg-muted transition-smooth"
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Select Payment Method
                  </label>
                  <div className="space-y-2">
                    {paymentMethods?.map((method) => (
                      <label
                        key={method?.id}
                        className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-smooth ${
                          selectedPaymentMethod === method?.id
                            ? 'border-primary bg-primary/5' :'border-border hover:bg-muted/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method?.id}
                          checked={selectedPaymentMethod === method?.id}
                          onChange={(e) => setSelectedPaymentMethod(e?.target?.value)}
                          className="sr-only"
                        />
                        <Icon name={method?.icon} size={20} className="text-muted-foreground" />
                        <span className="font-medium text-foreground">{method?.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => setShowAddMoney(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="default"
                    fullWidth
                    onClick={handleAddMoney}
                    disabled={!addAmount || !selectedPaymentMethod}
                  >
                    Add ₹{addAmount || '0'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletTab;