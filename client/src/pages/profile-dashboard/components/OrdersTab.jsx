import React, { useState } from 'react';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImages';
import Button from '@/components/ui/Button';

const OrdersTab = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedOrder, setExpandedOrder] = useState(null);

  const orders = [
  {
    id: "ORD-2025-001234",
    date: "12/10/2025",
    status: "delivered",
    total: 4599,
    items: [
    {
      id: 1,
      name: "Ethnic Kurta Set - Navy Blue",
      brand: "ABFRL",
      size: "M",
      color: "Navy Blue",
      quantity: 1,
      price: 2299,
      image: "https://images.unsplash.com/photo-1727835523539-748d1b578fff",
      imageAlt: "Navy blue ethnic kurta set with intricate embroidery displayed on white background"
    },
    {
      id: 2,
      name: "Designer Palazzo Pants",
      brand: "ABFRL",
      size: "M",
      color: "Cream",
      quantity: 1,
      price: 1799,
      image: "https://images.unsplash.com/photo-1693989249334-012b708d2c07",
      imageAlt: "Cream colored palazzo pants with flowing fabric on model"
    },
    {
      id: 3,
      name: "Statement Earrings",
      brand: "Accessory Co",
      size: "One Size",
      color: "Gold",
      quantity: 1,
      price: 501,
      image: "https://images.unsplash.com/photo-1500161949-943357ea38e3",
      imageAlt: "Gold statement earrings with intricate design on jewelry display"
    }],

    deliveryAddress: "A-204, Sunrise Apartments, Linking Road, Bandra West, Mumbai - 400050",
    trackingNumber: "TRK123456789",
    deliveredDate: "15/10/2025"
  },
  {
    id: "ORD-2025-001235",
    date: "08/10/2025",
    status: "shipped",
    total: 3299,
    items: [
    {
      id: 4,
      name: "Casual Denim Jacket",
      brand: "ABFRL",
      size: "L",
      color: "Light Blue",
      quantity: 1,
      price: 2199,
      image: "https://images.unsplash.com/photo-1667086724678-8c18a399f76d",
      imageAlt: "Light blue denim jacket with classic cut displayed on hanger"
    },
    {
      id: 5,
      name: "Cotton T-Shirt",
      brand: "ABFRL",
      size: "M",
      color: "White",
      quantity: 1,
      price: 1100,
      image: "https://images.unsplash.com/photo-1672669092491-ac5a210747bc",
      imageAlt: "White cotton t-shirt with minimalist design on model"
    }],

    deliveryAddress: "A-204, Sunrise Apartments, Linking Road, Bandra West, Mumbai - 400050",
    trackingNumber: "TRK123456790",
    expectedDelivery: "16/10/2025"
  },
  {
    id: "ORD-2025-001236",
    date: "05/10/2025",
    status: "processing",
    total: 5999,
    items: [
    {
      id: 6,
      name: "Festive Lehenga Set",
      brand: "ABFRL",
      size: "S",
      color: "Maroon",
      quantity: 1,
      price: 5999,
      image: "https://images.unsplash.com/photo-1735553816769-7d30e5b1a19a",
      imageAlt: "Maroon festive lehenga set with gold embroidery and dupatta"
    }],

    deliveryAddress: "A-204, Sunrise Apartments, Linking Road, Bandra West, Mumbai - 400050",
    expectedDelivery: "18/10/2025"
  },
  {
    id: "ORD-2025-001237",
    date: "28/09/2025",
    status: "cancelled",
    total: 2799,
    items: [
    {
      id: 7,
      name: "Formal Blazer",
      brand: "ABFRL",
      size: "M",
      color: "Black",
      quantity: 1,
      price: 2799,
      image: "https://images.unsplash.com/photo-1697648266306-9d8c40dda3aa",
      imageAlt: "Black formal blazer with tailored fit on professional model"
    }],

    deliveryAddress: "A-204, Sunrise Apartments, Linking Road, Bandra West, Mumbai - 400050",
    cancelledDate: "29/09/2025",
    cancelReason: "Size unavailable"
  }];


  const filterOptions = [
  { value: 'all', label: 'All Orders', count: orders?.length },
  { value: 'delivered', label: 'Delivered', count: orders?.filter((o) => o?.status === 'delivered')?.length },
  { value: 'shipped', label: 'Shipped', count: orders?.filter((o) => o?.status === 'shipped')?.length },
  { value: 'processing', label: 'Processing', count: orders?.filter((o) => o?.status === 'processing')?.length },
  { value: 'cancelled', label: 'Cancelled', count: orders?.filter((o) => o?.status === 'cancelled')?.length }];


  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':return 'text-success bg-success/10';
      case 'shipped':return 'text-primary bg-primary/10';
      case 'processing':return 'text-warning bg-warning/10';
      case 'cancelled':return 'text-error bg-error/10';
      default:return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':return 'CheckCircle';
      case 'shipped':return 'Truck';
      case 'processing':return 'Clock';
      case 'cancelled':return 'XCircle';
      default:return 'Package';
    }
  };

  const filteredOrders = selectedFilter === 'all' ?
  orders :
  orders?.filter((order) => order?.status === selectedFilter);

  const handleReorder = (order) => {
    // Handle reorder logic
    console.log('Reordering:', order?.id);
  };

  const handleTrackOrder = (trackingNumber) => {
    // Handle order tracking
    console.log('Tracking:', trackingNumber);
  };

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {filterOptions?.map((option) =>
        <button
          key={option?.value}
          onClick={() => setSelectedFilter(option?.value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
          selectedFilter === option?.value ?
          'bg-primary text-primary-foreground' :
          'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'}`
          }>

            {option?.label} ({option?.count})
          </button>
        )}
      </div>
      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders?.length === 0 ?
        <div className="text-center py-12">
            <Icon name="Package" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No orders found</h3>
            <p className="text-muted-foreground">
              {selectedFilter === 'all' ? "You haven't placed any orders yet." :
            `No ${selectedFilter} orders found.`}
            </p>
          </div> :

        filteredOrders?.map((order) =>
        <div key={order?.id} className="bg-card rounded-lg border border-border overflow-hidden">
              {/* Order Header */}
              <div className="p-6 border-b border-border">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Order ID</p>
                      <p className="font-medium text-foreground font-mono">{order?.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Order Date</p>
                      <p className="font-medium text-foreground">{order?.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="font-medium text-foreground">₹{order?.total?.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order?.status)}`}>
                      <Icon name={getStatusIcon(order?.status)} size={16} />
                      <span className="capitalize">{order?.status}</span>
                    </div>
                    
                    <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedOrder(expandedOrder === order?.id ? null : order?.id)}
                  iconName={expandedOrder === order?.id ? "ChevronUp" : "ChevronDown"}>

                      {expandedOrder === order?.id ? "Hide" : "View"} Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order Items Preview */}
              <div className="p-6">
                <div className="flex items-center space-x-4 overflow-x-auto">
                  {order?.items?.slice(0, 3)?.map((item) =>
              <div key={item?.id} className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                  src={item?.image}
                  alt={item?.imageAlt}
                  className="w-full h-full object-cover" />

                    </div>
              )}
                  {order?.items?.length > 3 &&
              <div className="flex-shrink-0 w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-sm font-medium text-muted-foreground">
                        +{order?.items?.length - 3}
                      </span>
                    </div>
              }
                  <div className="flex-shrink-0 ml-4">
                    <p className="text-sm text-muted-foreground">
                      {order?.items?.length} item{order?.items?.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>

              {/* Expanded Order Details */}
              {expandedOrder === order?.id &&
          <div className="border-t border-border p-6 bg-muted/20">
                  <div className="space-y-6">
                    {/* Items List */}
                    <div>
                      <h4 className="font-medium text-foreground mb-4">Order Items</h4>
                      <div className="space-y-4">
                        {order?.items?.map((item) =>
                  <div key={item?.id} className="flex items-center space-x-4 p-4 bg-background rounded-lg">
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                        src={item?.image}
                        alt={item?.imageAlt}
                        className="w-full h-full object-cover" />

                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-medium text-foreground truncate">{item?.name}</h5>
                              <p className="text-sm text-muted-foreground">{item?.brand}</p>
                              <p className="text-sm text-muted-foreground">
                                Size: {item?.size} | Color: {item?.color} | Qty: {item?.quantity}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-foreground">₹{item?.price?.toLocaleString('en-IN')}</p>
                            </div>
                          </div>
                  )}
                      </div>
                    </div>

                    {/* Delivery Information */}
                    <div>
                      <h4 className="font-medium text-foreground mb-4">Delivery Information</h4>
                      <div className="bg-background rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Icon name="MapPin" size={20} className="text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm text-foreground">{order?.deliveryAddress}</p>
                            {order?.trackingNumber &&
                      <p className="text-sm text-muted-foreground mt-2">
                                Tracking: <span className="font-mono">{order?.trackingNumber}</span>
                              </p>
                      }
                            {order?.expectedDelivery &&
                      <p className="text-sm text-muted-foreground">
                                Expected Delivery: {order?.expectedDelivery}
                              </p>
                      }
                            {order?.deliveredDate &&
                      <p className="text-sm text-success">
                                Delivered on: {order?.deliveredDate}
                              </p>
                      }
                            {order?.cancelledDate &&
                      <p className="text-sm text-error">
                                Cancelled on: {order?.cancelledDate} - {order?.cancelReason}
                              </p>
                      }
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {order?.status === 'delivered' &&
                <>
                          <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReorder(order)}
                    iconName="RotateCcw"
                    iconPosition="left">

                            Reorder
                          </Button>
                          <Button
                    variant="outline"
                    size="sm"
                    iconName="Download"
                    iconPosition="left">

                            Download Invoice
                          </Button>
                        </>
                }
                      
                      {(order?.status === 'shipped' || order?.status === 'processing') &&
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleTrackOrder(order?.trackingNumber)}
                  iconName="MapPin"
                  iconPosition="left">

                          Track Order
                        </Button>
                }
                      
                      <Button
                  variant="outline"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left">

                        Contact Support
                      </Button>
                    </div>
                  </div>
                </div>
          }
            </div>
        )
        }
      </div>
    </div>);

};

export default OrdersTab;