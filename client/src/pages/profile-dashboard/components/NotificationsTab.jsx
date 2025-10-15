import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationsTab = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      title: 'Order Delivered Successfully',
      message: 'Your order ORD-2025-001234 has been delivered to your address. We hope you love your new items!',
      timestamp: '2 hours ago',
      date: '13/10/2025',
      isRead: false,
      actionable: true,
      actionText: 'Rate & Review',
      orderId: 'ORD-2025-001234'
    },
    {
      id: 2,
      type: 'promotion',
      title: 'Festive Sale - Up to 70% Off',
      message: 'Diwali special offers are live! Get amazing discounts on ethnic wear, accessories, and more. Limited time offer.',
      timestamp: '4 hours ago',
      date: '13/10/2025',
      isRead: false,
      actionable: true,
      actionText: 'Shop Now',
      promoCode: 'DIWALI70'
    },
    {
      id: 3,
      type: 'ai_suggestion',
      title: 'AI Stylist Recommendation',
      message: 'Based on your recent purchases, we think you\'ll love these trending kurta sets. Perfect for the festive season!',
      timestamp: '6 hours ago',
      date: '13/10/2025',
      isRead: true,
      actionable: true,
      actionText: 'View Suggestions'
    },
    {
      id: 4,
      type: 'order',
      title: 'Order Shipped',
      message: 'Great news! Your order ORD-2025-001235 is on its way. Expected delivery: 16/10/2025',
      timestamp: '1 day ago',
      date: '12/10/2025',
      isRead: true,
      actionable: true,
      actionText: 'Track Order',
      orderId: 'ORD-2025-001235',
      trackingNumber: 'TRK123456790'
    },
    {
      id: 5,
      type: 'wallet',
      title: 'Cashback Credited',
      message: 'Congratulations! ₹500 cashback has been credited to your wallet for order ORD-2025-001234.',
      timestamp: '1 day ago',
      date: '12/10/2025',
      isRead: true,
      actionable: false,
      amount: 500
    },
    {
      id: 6,
      type: 'wishlist',
      title: 'Price Drop Alert',
      message: 'Good news! The price of "Designer Anarkali Dress" in your wishlist has dropped by 20%. Grab it now!',
      timestamp: '2 days ago',
      date: '11/10/2025',
      isRead: true,
      actionable: true,
      actionText: 'Buy Now',
      originalPrice: 5999,
      newPrice: 4799
    },
    {
      id: 7,
      type: 'loyalty',
      title: 'Loyalty Points Earned',
      message: 'You\'ve earned 230 loyalty points from your recent purchase. Total points: 1,250',
      timestamp: '3 days ago',
      date: '10/10/2025',
      isRead: true,
      actionable: true,
      actionText: 'Redeem Points',
      pointsEarned: 230,
      totalPoints: 1250
    },
    {
      id: 8,
      type: 'system',
      title: 'Account Security Update',
      message: 'Your account password was successfully updated. If this wasn\'t you, please contact our support team immediately.',
      timestamp: '5 days ago',
      date: '08/10/2025',
      isRead: true,
      actionable: true,
      actionText: 'Contact Support'
    }
  ]);

  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  const notificationTypes = [
    { value: 'all', label: 'All Notifications', icon: 'Bell', count: notifications?.length },
    { value: 'order', label: 'Orders', icon: 'Package', count: notifications?.filter(n => n?.type === 'order')?.length },
    { value: 'promotion', label: 'Promotions', icon: 'Tag', count: notifications?.filter(n => n?.type === 'promotion')?.length },
    { value: 'ai_suggestion', label: 'AI Suggestions', icon: 'Sparkles', count: notifications?.filter(n => n?.type === 'ai_suggestion')?.length },
    { value: 'wallet', label: 'Wallet', icon: 'Wallet', count: notifications?.filter(n => n?.type === 'wallet')?.length },
    { value: 'wishlist', label: 'Wishlist', icon: 'Heart', count: notifications?.filter(n => n?.type === 'wishlist')?.length },
    { value: 'loyalty', label: 'Loyalty', icon: 'Star', count: notifications?.filter(n => n?.type === 'loyalty')?.length },
    { value: 'system', label: 'System', icon: 'Settings', count: notifications?.filter(n => n?.type === 'system')?.length }
  ];

  const getNotificationIcon = (type) => {
    const typeConfig = notificationTypes?.find(t => t?.value === type);
    return typeConfig ? typeConfig?.icon : 'Bell';
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'order': return 'text-primary bg-primary/10';
      case 'promotion': return 'text-accent bg-accent/10';
      case 'ai_suggestion': return 'text-purple-600 bg-purple-100';
      case 'wallet': return 'text-success bg-success/10';
      case 'wishlist': return 'text-pink-600 bg-pink-100';
      case 'loyalty': return 'text-accent bg-accent/10';
      case 'system': return 'text-muted-foreground bg-muted';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const filteredNotifications = selectedFilter === 'all' 
    ? notifications 
    : notifications?.filter(n => n?.type === selectedFilter);

  const unreadCount = notifications?.filter(n => !n?.isRead)?.length;

  const handleMarkAsRead = (notificationId) => {
    setNotifications(prev => 
      prev?.map(n => 
        n?.id === notificationId ? { ...n, isRead: true } : n
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev?.map(n => ({ ...n, isRead: true })));
  };

  const handleDeleteNotification = (notificationId) => {
    setNotifications(prev => prev?.filter(n => n?.id !== notificationId));
    setSelectedNotifications(prev => prev?.filter(id => id !== notificationId));
  };

  const handleSelectNotification = (notificationId) => {
    setSelectedNotifications(prev => 
      prev?.includes(notificationId)
        ? prev?.filter(id => id !== notificationId)
        : [...prev, notificationId]
    );
  };

  const handleSelectAll = () => {
    if (selectedNotifications?.length === filteredNotifications?.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(filteredNotifications?.map(n => n?.id));
    }
  };

  const handleDeleteSelected = () => {
    setNotifications(prev => prev?.filter(n => !selectedNotifications?.includes(n?.id)));
    setSelectedNotifications([]);
  };

  const handleNotificationAction = (notification) => {
    switch (notification?.actionText) {
      case 'Rate & Review': console.log('Opening review modal for order:', notification?.orderId);
        break;
      case 'Shop Now': console.log('Navigating to shop with promo:', notification?.promoCode);
        break;
      case 'View Suggestions': console.log('Opening AI suggestions');
        break;
      case 'Track Order': console.log('Tracking order:', notification?.orderId);
        break;
      case 'Buy Now': console.log('Adding wishlist item to cart');
        break;
      case 'Redeem Points': console.log('Opening points redemption');
        break;
      case 'Contact Support': console.log('Opening support chat');
        break;
      default:
        console.log('Default action for:', notification?.actionText);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <h3 className="text-lg font-semibold text-foreground">
            Notifications
            {unreadCount > 0 && (
              <span className="ml-2 bg-accent text-accent-foreground text-sm font-medium px-2 py-1 rounded-full">
                {unreadCount} new
              </span>
            )}
          </h3>
          
          {filteredNotifications?.length > 0 && (
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedNotifications?.length === filteredNotifications?.length}
                onChange={handleSelectAll}
                className="rounded border-border"
              />
              <span className="text-sm text-muted-foreground">
                Select All ({selectedNotifications?.length} selected)
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {selectedNotifications?.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeleteSelected}
              iconName="Trash2"
              iconPosition="left"
              className="text-error hover:text-error"
            >
              Delete ({selectedNotifications?.length})
            </Button>
          )}
          
          {unreadCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleMarkAllAsRead}
              iconName="CheckCheck"
              iconPosition="left"
            >
              Mark All Read
            </Button>
          )}
        </div>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {notificationTypes?.map((type) => (
          <button
            key={type?.value}
            onClick={() => setSelectedFilter(type?.value)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
              selectedFilter === type?.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            <Icon name={type?.icon} size={16} />
            <span>{type?.label}</span>
            <span className="bg-background/20 text-xs px-1.5 py-0.5 rounded-full">
              {type?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications?.length === 0 ? (
          <div className="text-center py-16">
            <Icon name="Bell" size={64} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No notifications</h3>
            <p className="text-muted-foreground">
              {selectedFilter === 'all' ? "You're all caught up! No new notifications." 
                : `No ${selectedFilter} notifications found.`}
            </p>
          </div>
        ) : (
          filteredNotifications?.map((notification) => (
            <div
              key={notification?.id}
              className={`bg-card rounded-lg border transition-smooth hover:shadow-medium ${
                notification?.isRead ? 'border-border' : 'border-primary/30 bg-primary/5'
              }`}
            >
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  {/* Selection Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedNotifications?.includes(notification?.id)}
                    onChange={() => handleSelectNotification(notification?.id)}
                    className="mt-1 rounded border-border"
                  />

                  {/* Notification Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getNotificationColor(notification?.type)}`}>
                    <Icon name={getNotificationIcon(notification?.type)} size={20} />
                  </div>

                  {/* Notification Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{notification?.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                          {notification?.message}
                        </p>
                        
                        {/* Additional Info */}
                        {notification?.amount && (
                          <div className="flex items-center space-x-2 mb-2">
                            <Icon name="IndianRupee" size={14} className="text-success" />
                            <span className="text-sm font-medium text-success">
                              ₹{notification?.amount?.toLocaleString('en-IN')} credited
                            </span>
                          </div>
                        )}
                        
                        {notification?.originalPrice && notification?.newPrice && (
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{notification?.originalPrice?.toLocaleString('en-IN')}
                            </span>
                            <span className="text-sm font-medium text-success">
                              ₹{notification?.newPrice?.toLocaleString('en-IN')}
                            </span>
                          </div>
                        )}
                        
                        {notification?.pointsEarned && (
                          <div className="flex items-center space-x-2 mb-2">
                            <Icon name="Star" size={14} className="text-accent" />
                            <span className="text-sm text-foreground">
                              +{notification?.pointsEarned} points earned
                            </span>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{notification?.timestamp}</span>
                          
                          {/* Action Buttons */}
                          <div className="flex items-center space-x-2">
                            {notification?.actionable && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleNotificationAction(notification)}
                              >
                                {notification?.actionText}
                              </Button>
                            )}
                            
                            {!notification?.isRead && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleMarkAsRead(notification?.id)}
                                iconName="Check"
                              >
                                Mark Read
                              </Button>
                            )}
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteNotification(notification?.id)}
                              iconName="Trash2"
                              className="text-error hover:text-error"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Unread Indicator */}
                      {!notification?.isRead && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsTab;