import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Header from '../../components/ui/Header';
import ChatWidget from '../../components/ui/ChatWidget';
import ProfileTab from './components/ProfileTab';
import OrdersTab from './components/OrdersTab';
import WishlistTab from './components/WishlistTab';
import WalletTab from './components/WalletTab';
import NotificationsTab from './components/NotificationsTab';

const ProfileDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userStats, setUserStats] = useState({
    totalOrders: 12,
    wishlistItems: 8,
    loyaltyPoints: 1250,
    walletBalance: 2450
  });
  const navigate = useNavigate();

  const tabs = [
    {
      id: 'profile',
      label: 'My Profile',
      icon: 'User',
      component: ProfileTab,
      description: 'Manage your personal information and addresses'
    },
    {
      id: 'orders',
      label: 'My Orders',
      icon: 'Package',
      component: OrdersTab,
      description: 'Track your orders and purchase history',
      badge: userStats?.totalOrders
    },
    {
      id: 'wishlist',
      label: 'Wishlist',
      icon: 'Heart',
      component: WishlistTab,
      description: 'Items you\'ve saved for later',
      badge: userStats?.wishlistItems
    },
    {
      id: 'wallet',
      label: 'My Wallet',
      icon: 'Wallet',
      component: WalletTab,
      description: 'Manage your wallet balance and loyalty points'
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: 'Bell',
      component: NotificationsTab,
      description: 'Stay updated with order status and offers'
    }
  ];

  const ActiveComponent = tabs?.find(tab => tab?.id === activeTab)?.component;

  useEffect(() => {
    // Simulate fetching user stats
    const fetchUserStats = () => {
      // In real app, this would be an API call
      setUserStats({
        totalOrders: 12,
        wishlistItems: 8,
        loyaltyPoints: 1250,
        walletBalance: 2450
      });
    };

    fetchUserStats();
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">My Account</h1>
                <p className="text-muted-foreground">
                  Manage your profile, orders, and preferences
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{userStats?.totalOrders}</p>
                  <p className="text-sm text-muted-foreground">Orders</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">{userStats?.loyaltyPoints}</p>
                  <p className="text-sm text-muted-foreground">Points</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">₹{userStats?.walletBalance?.toLocaleString('en-IN')}</p>
                  <p className="text-sm text-muted-foreground">Wallet</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                <nav className="space-y-2">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => handleTabChange(tab?.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-smooth ${
                        activeTab === tab?.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon 
                          name={tab?.icon} 
                          size={20} 
                          className={activeTab === tab?.id ? 'text-primary-foreground' : 'text-muted-foreground'}
                        />
                        <div>
                          <p className="font-medium">{tab?.label}</p>
                          <p className={`text-xs ${
                            activeTab === tab?.id ? 'text-primary-foreground/80' : 'text-muted-foreground'
                          }`}>
                            {tab?.description}
                          </p>
                        </div>
                      </div>
                      
                      {tab?.badge && (
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          activeTab === tab?.id
                            ? 'bg-primary-foreground/20 text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {tab?.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-sm font-medium text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => navigate('/shopping-cart')}
                      className="w-full flex items-center space-x-3 p-3 text-left text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-smooth"
                    >
                      <Icon name="ShoppingCart" size={16} />
                      <span className="text-sm">View Cart</span>
                    </button>
                    
                    <button
                      onClick={() => navigate('/home-landing')}
                      className="w-full flex items-center space-x-3 p-3 text-left text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-smooth"
                    >
                      <Icon name="Home" size={16} />
                      <span className="text-sm">Continue Shopping</span>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 p-3 text-left text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-smooth">
                      <Icon name="HelpCircle" size={16} />
                      <span className="text-sm">Help & Support</span>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 p-3 text-left text-error hover:bg-error/10 rounded-lg transition-smooth">
                      <Icon name="LogOut" size={16} />
                      <span className="text-sm">Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              <div className="bg-card rounded-lg border border-border">
                {/* Tab Header */}
                <div className="border-b border-border p-6">
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={tabs?.find(tab => tab?.id === activeTab)?.icon} 
                      size={24} 
                      className="text-primary"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-card-foreground">
                        {tabs?.find(tab => tab?.id === activeTab)?.label}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {tabs?.find(tab => tab?.id === activeTab)?.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {ActiveComponent && <ActiveComponent />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Mobile Tab Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
        <div className="flex">
          {tabs?.slice(0, 5)?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => handleTabChange(tab?.id)}
              className={`flex-1 flex flex-col items-center py-3 px-2 transition-smooth ${
                activeTab === tab?.id
                  ? 'text-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="relative">
                <Icon name={tab?.icon} size={20} />
                {tab?.badge && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                    {tab?.badge > 99 ? '99+' : tab?.badge}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium mt-1">{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default ProfileDashboard;